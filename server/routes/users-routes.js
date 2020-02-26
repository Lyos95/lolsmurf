
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
const User = mongoose.model("user");
const bcrypt = require("bcryptjs")

router.post('/login', async function ( req, res, next) {

    
    var user = await User.findOne({'email': req.body.email});

    
    if(user === null){
    
        
        res.send(false); 
    }else{                        
        if(!bcrypt.compareSync(req.body.password,user.passwordHash)){  
                   
            res.send(false);                  
        }else {
        
            res.send(true);            
        }
    }     
});



module.exports = router;