const router = require('express').Router();
const bcrypt = require('bcrypt');
const user =require('../schema/userSchema');


router.route('/signup').post((req,res)=>{
    const users=req.body; 
  const newUser= new user(users);
    bcrypt.hash(newUser.password, 12, function(err, hashPassword) {

        if(err)
        res.status(400).json({isUserSignedUp:false}); 
        else
        {
                
             newUser.password=hashPassword;
            newUser.save((err)=>{
                if(err) {
                    res.status(400).json({isUserSignedUp:false})
                } 
                else{
                    res.status(200).json({isUserSignedUp:true})
                }
            })
        }
    });
   
})

router.route('/login').post((req,res)=>{
    const logUser=req.body;
    
            user.findOne({email:logUser.email},(err,doc)=>{
               
              
                bcrypt.compare(logUser.password, doc.password, function(err, res) {
                    if(res)
                     res.status(200).json({isUserLoggedIn:true})
                     else{
                         res.status(400).json({isUserLoggedIn:false})
                     }
                });
                      
                
            })
       
   
   
})



module.exports=router;
