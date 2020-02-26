
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
const User = mongoose.model("user");
const bcrypt = require("bcryptjs")
const PAYPAL_CLIENT = 'ActeDxf8liyWa8og-xYgIJs5G_JiB70Zk_w1_Xf-M-UosC8j7Eq8V4_Imd5us934RPmWJf6LXPtty3xE';
const PAYPAL_SECRET = 'EO0gZ4bm0DrrEXvyri_nIiF_mYBJpaCeT-e8OwuUaJYXxeUwo7xh61Jos_ZLxTQOmPo86KWTWR0QQFHr';
const PAYPAL_OAUTH_API = 'https://api.paypal.com/v1/oauth2/token/';
const PAYPAL_ORDER_API = 'https://api.paypal.com/v2/checkout/orders/';
var Base64 = require('js-base64').Base64;
const axios = require('axios');
const Account = mongoose.model("account");
const nodemailer = require('nodemailer');

const region = {
  "EU WEST": "EUW",
  "NA": "NA",
  "EU NORDIC & EAST": "EUNE",
  "TURKEY": "TURK",
  "PBE": "PBE"
}
router.post('/', async function (req, res, next) {
  try {

    let orderID = req.body.orderID
   

    let email = req.body.email
    let amount = req.body.amount
    let products = req.body.products
    
    let basicAuth = await Base64.encodeURI(`${PAYPAL_CLIENT}:${PAYPAL_SECRET}`);
  

    let axiosConfig = {
      headers: {
        Accept: `application/json`,
        Authorization: `Basic ${basicAuth}`
      }
    };

    let auth = await axios.post(PAYPAL_OAUTH_API, `grant_type=client_credentials`, axiosConfig)
    
    let details = await axios.get(PAYPAL_ORDER_API + orderID, {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${auth.data.access_token}`
      }
    })


    // 4. Handle any errors from the call
    if (details.error) {

      //   return response.send(500);
    }

    // 5. Validate the transaction details are as expected
    
    if (Number(details.data.purchase_units[0].amount.value) === Number(amount)) {
      //    return response.send(400);


      let accountsSold = [];
      for (let i = 0; i < products.length; i++) {

        for (let j = 0; j < Number(products[i].quantity); j++) {

          let accountFromBD = await Account.findOne({
            region: region[products[i].title],
            status: 'NOT_SOLD'
          });

          if (accountFromBD) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            accountFromBD.email = email
            accountFromBD.status = 'SOLD'
            accountFromBD.dateOfSelling = today
            let accountSaved = await accountFromBD.save();
            await accountsSold.push(accountSaved)
          }

        }


      }

      var transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'support@lolsmurf.net', // your domain email address
          pass: 'television1' // your password
        }
      });


      
      let html = `<html>
                    <head>
                      <style>
                      h2 {
                        text-align:center
                      }
                      table {
                        font-family: arial, sans-serif;
                        border-collapse: collapse;
                        width: 100%;
                      }

                      td, th {
                        border: 1px solid #dddddd;
                        text-align: center;
                        padding: 8px;
                      }

                      tr:nth-child(even) {
                        background-color: #dddddd;
                      }
                      </style>
                  </head>
                  <body>
                    <h2>Accounts</h2>
                    </br></br>
                    <table>
                      <tr>
                        <th>Region</th>
                        <th>NickName</th>
                        <th>Password</th>
                      </tr>`


      for (let i = 0; i < accountsSold.length; i++) {
          html=html+`<tr>
          <td>${accountsSold[i].region}</td>
          <td>${accountsSold[i].nickName}</td>
          <td>${accountsSold[i].password}</td>
        </tr>`

      }
      html = html + `</table>

      </body>
      </html>`
      const mailOptions = {
        from: 'support@lolsmurf.net',
        to: email,
        subject: 'League of Legends Smurfs',
        html: html
      };
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          
          console.error('Error sending the mail');
        } else {
          res.status(200).json('recovery email sent');
        }
      })

      res.send({
        response: '200',
        accounts: accountsSold
      });
    } else {

      res.send({
        response: '400',
        accounts: []
      });
    }
    // return response.send(200);
  } catch (e) {
    console.log(e);
    
    res.send({
      response: '400',
      accounts: []
    });

  }


});



module.exports = router;