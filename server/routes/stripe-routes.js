const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const mongoose = require("mongoose");

const Account = mongoose.model("account");
const nodemailer = require('nodemailer');

const region = {
  "EU WEST": "EUW",
  "NA": "NA",
  "EU NORDIC & EAST": "EUNE",
  "TURKEY": "TURK",
  "OCEANIA": "OCE"
}

router.get("/public-key", (req, res) => {
  res.send({ publicKey: process.env.STRIPE_PUBLISHABLE_KEY });
});


router.post("/transaction-completed", async (req, res) => {
  try {
   
    let email = req.body.email
    let products = req.body.products


      let accountsSold = [];
      for(let i = 0; i < products.length; i++){
        for(let j = 0; j < products[i].type.length; j++){
          for(let k = 0; k < products[i].type[j].quantity; k++){
            let accountFromBD = await Account.findOne({
              region: region[products[i].title],
              status: 'NOT_SOLD',
              be: products[i].type[j].be
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

      let accountsrow = ''
      for (let i = 0; i < accountsSold.length; i++) {
        accountsrow=accountsrow+`<tr>
        <td>${accountsSold[i].region}</td>
        <td>${accountsSold[i].nickName}</td>
        <td>${accountsSold[i].password}</td>
        <td>${accountsSold[i].be}</td>
      </tr>`

    }
      
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
                      #review {
                        text-align: center;
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
                        <th>BE</th>
                      </tr>`


     
      html = html + accountsrow + `</table>
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

    // return response.send(200);
  } catch (e) {

    
    res.send({
      response: '400',
      accounts: []
    });

  }
  res.send(data);
});

router.post("/create-payment-intent", async (req, res) => {
  const body = req.body;
  console.log('body',body)
  
  const productDetails = { currency: "USD", amount: body.amount*100 }

  const options = {
    ...body,
    amount: productDetails.amount,
    currency: productDetails.currency,
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create(options);
    res.json(paymentIntent);
  } catch (err) {
      console.log('error',err)
    res.json(err);
  }
});


module.exports = router;
