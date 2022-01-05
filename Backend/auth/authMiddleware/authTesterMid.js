 const jwt =require('jsonwebtoken');

const authTesterMiddleware=(req,res,next)=>{
   
    jwt.verify(req.cookies.auth,'skhatLaunda',(err,data)=>{

        
        if(data)
        {
            next(data);
        }

        else
        res.status(302).json({isUserLoggedIn:false});
        
    })

}

module.exports=authTesterMiddleware;