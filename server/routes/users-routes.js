
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
const User = mongoose.model("user");
const bcrypt = require("bcryptjs")

router.post('/login', async function ( req, res, next) {
    console.log(req.body);
    
    var user = await User.findOne({'email': req.body.email});
    console.log(user);
    
    if(user === null){
        console.log('1');
        
        res.send(false); 
    }else{                        
        if(!bcrypt.compareSync(req.body.password,user.passwordHash)){  
            console.log('2');                  
            res.send(false);                  
        }else {
            console.log('3');
            res.send(true);            
        }
    }     
});



module.exports = router;