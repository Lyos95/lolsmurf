const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys");
const mongoose = require('mongoose');



const stripe = require('stripe')(keys.stripeSecretKey);
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();


const sitemapOptions = {
    root: __dirname + '/static/sitemap/',
    headers: {
        'Content-Type': 'text/xml;charset=UTF-8'
    }
};

app.prepare().then(() => {
    const server = express();
    // Static files
    // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));
    
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true })); // quizas lo tengas que quitar para que funcione stripe 
    mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
    require('./server/models/Account');
    require('./server/models/User');
    const accountsAPI = require('./server/routes/accounts-routers');
    const usersAPI = require('./server/routes/users-routes');
    const paypalAPI = require('./server/routes/paypal-routes')
    server.use('/api/accounts',accountsAPI)
    server.use('/api/user',usersAPI)
    server.use('/api/paypal-transaction-complete',paypalAPI)
    
 

    server.get('/sitemap.xml', (req, res) => res.status(200).sendFile('sitemap.xml', sitemapOptions));
    server.get('*', (req, res) => {
        return handle(req, res)
    });
    
    server.post('/api/stripe/checkout', async (req, res) => {
        await stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'React Next eCommerce Templates',
            source: req.body.token.id
        });
        res.send({})
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });
    
    
})