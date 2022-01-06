const router = require('express').Router();

router.route('/logout').get((req,res)=>{
    res.cookie('auth','log out',{maxAge:10000*12,httpOnly:true}).json({isUserLoggedOut:true});
})



module.exports=router;