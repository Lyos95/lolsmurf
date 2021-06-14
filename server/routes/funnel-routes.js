
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
const Funnel = mongoose.model("funnel");
      
    let jsonParser = bodyParser.json()
    router.get('/', async function ( req, res, next) {
        try {
  
            let funnel;
            funnel = await Funnel.find();     
            res.send(funnel);
        }catch(e){
            res.send('Error');
        }
    });    

    router.post('/', async function ( req, res, next) {
        try {
            let funnel = req.body;         
            let funnelFromBD = await Funnel.findOne({'name': funnel.data});
            if(funnelFromBD){
                funnelFromBD.overwrite({name: funnel.data,qty:funnelFromBD.qty+1});         
                await funnelFromBD.save();
            }else{
                let newFunnel = new Funnel ({
                    name: funnel.data,
                    qty: 1
                })
                await newFunnel.save();
            }
        }catch(e){
            res.send('Error');
        }
    });




    module.exports = router;