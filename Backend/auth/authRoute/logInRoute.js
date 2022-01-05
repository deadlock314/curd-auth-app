const router = require('express').Router();
const bcrypt = require('bcrypt');
const user =require('../../schema/userSchema');
const jwt =require('jsonwebtoken');

router.route('/login').post((req,res)=>{
    const logUser=req.body;
    
            user.findOne({email:logUser.email},(err,doc)=>{
               
              
                bcrypt.compare(logUser.password, doc.password, function(err, result) {
                    if(result)
                    {    const token=jwt.sign({name:doc.name},'skhatLaunda');
                         res.cookie("auth",token,{maxAge:1000*60*60,httpOnly:true}).json({isUserLoggedIn:true});
                    }
                    
                     else{
                         res.status(400).json({isUserLoggedIn:false})
                     }
                });
                      
                
            })
       
   
   
})



module.exports=router;
