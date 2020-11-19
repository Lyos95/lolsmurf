
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
                    email: '',
                    be: account.be
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
            let accountsObject = {"EUW":[{be:40000,
                                         "amount":0
                                        },
                                        {be:50000,
                                        "amount":0
                                        },
                                        {be:60000,
                                        "amount":0
                                        },
                                        {be:70000,
                                        "amount":0
                                        }],
                                  "NA":[{be:40000,
                                        "amount":0
                                        },
                                        {be:50000,
                                        "amount":0
                                        },
                                        {be:60000,
                                        "amount":0
                                        },
                                        {be:70000,
                                        "amount":0
                                        }],
                                  "EUNE":[{be:40000,
                                        "amount":0
                                        },
                                        {be:50000,
                                        "amount":0
                                        },
                                        {be:60000,
                                        "amount":0
                                        },
                                        {be:70000,
                                        "amount":0
                                        }],
                                  "TURK":[{be:40000,
                                        "amount":0
                                        },
                                        {be:50000,
                                        "amount":0
                                        },
                                        {be:60000,
                                        "amount":0
                                        },
                                        {be:70000,
                                        "amount":0
                                        }],
                                  "OCE":[{be:40000,
                                        "amount":0
                                        },
                                        {be:50000,
                                        "amount":0
                                        },
                                        {be:60000,
                                        "amount":0
                                        },
                                        {be:70000,
                                        "amount":0
                                        }],
                                };
                                
            let accountsFromBD = await Account.find();
            
            for(let i = 0; i< accountsFromBD.length; i++){
                if(accountsFromBD[i].status === 'NOT_SOLD'){
                    if(accountsFromBD[i].be){
                        let account = accountsObject[accountsFromBD[i].region].find(element => element.be == accountsFromBD[i].be)
                        account.amount = account.amount+1
                    }else{
                        let account = accountsObject[accountsFromBD[i].region].find(element => element.be === 60000)
                        account.amount = account.amount+1
                    }                    
                }
            }        
            res.send(accountsObject);
        }catch(e){
            res.send('Error');
        }
    });

    module.exports = router;