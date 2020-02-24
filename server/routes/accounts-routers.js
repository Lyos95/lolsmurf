
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
const Account = mongoose.model("account");
      
    let jsonParser = bodyParser.json()
    router.get('/', async function ( req, res, next) {
        try {
            let accounts;
            
                accounts = await Account.find();   
               
            res.send(accounts);
        }catch(e){
            res.send('Error');
        }
    });
    router.get('/:nickName', async function ( req, res, next) {
        try {
            const {nickName} = req.params;
            let accounts;
            if(req.body){                
                accounts = await Account.find({nickName:nickName})
            }else{
                accounts = await Account.find();            
            }
            res.send(accounts);
        }catch(e){
            res.send('Error');
        }
    });
    router.post('/saveAccounts', async function ( req, res, next) {
        try {            
            req.body.map(async(account) => {
                let newAccount = new Account ({
                    nickName: account.nickName,
                    password: account.password,
                    region: account.region,
                    status: 'NOT_SOLD',
                    email: ''
                })
                let accountFound = await Account.find({'nickname': account.nickName});
                if(accountFound.length === 0){
                await newAccount.save();
                }
            })
            res.send('OK');
        }catch(e){
            res.send('ERROR');
        }
        
    });
    

    router.post('/update-account', async function ( req, res, next) {
        try {
            let account = req.body;         
            let accountFromBD = await Account.findOne({'_id': account._id});
            if(accountFromBD){
                accountFromBD.overwrite(req.body);         
                await accountFromBD.save();
            }
            
            res.send(accountFromBD);
        }catch(e){
            res.send('Error');
        }
    });


    router.post('/allAccounts', async function ( req, res, next) {
        try {        
            let accountsObject = {"EUW":0,
                                  "NA":0,
                                  "EUNE":0,
                                  "TURK":0,
                                  "PBE":0
                                };
                                console.log('init');
                                
            let accountsFromBD = await Account.find();
            console.log(accountsFromBD);
            
            for(let i = 0; i< accountsFromBD.length; i++){
                console.log('ite '+i);
                if(accountsFromBD[i].status === 'NOT_SOLD'){
                    accountsObject[accountsFromBD[i].region] = accountsObject[accountsFromBD[i].region]+ 1;
                }
            }          
            res.send(accountsObject);
        }catch(e){
            res.send('Error');
        }
    });

    module.exports = router;