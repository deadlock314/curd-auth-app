 const jwt =require('jsonwebtoken');
const user=require('../../schema/userSchema')



const authTesterMiddleware=(req,res,next)=>{
    
    jwt.verify(req.cookies.auth,'skhatLaunda',(err,data)=>{
       
    if(typeof(data)=='undefined')
    {
        res.status(302).json({isUserAdded:false,isUserLoggedIn:false});
    }
    else 
        { 
            user.findOne({email:data.email},(err,doc)=> {
                if(doc.email==data.email){
                   next();
                }
                else{
               res.status(302).json({isUserAdded:false,isUserLoggedIn:false});
           }})
           
           }
       
        
    })
}

module.exports=authTesterMiddleware;