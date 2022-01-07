const router=require('express').Router();
const authTesterMiddleware = require('./auth/authMiddleware/authTesterMid');
let Person = require('./schema/personSchema');

router.route('/').get((req,res)=>{

    
    Person.find({},(err,doc)=>{
         if(err){
             res.end(err);
             console.log(err)
         }
         else{
            res.cookie('time', new Date(),{httpOnly:true,secure:false,SameSite:false}).json(doc);
         }
    })
   
});

router.route('/post').post(authTesterMiddleware,(req,res)=>{
    const person=req.body;

    const newPerson = new Person(person);

    newPerson.save((err)=>{
        if(err){
           res.status(400).json({isUserAdded:false,isUserLoggedIn:true})
        }
        else{
           res.status(201).json({isUserAdded:true,isUserLoggedIn:true}) 
        }
    })

});

router.route('/delete/:id').delete((req,res)=>{
    Person.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
             res.status(400).json({isUserDeleted:false})
        }
        else{
             res.status(200).json({isUserDeleted:true})
        }
    })

});

router.route('/update/:id').post((req,res)=>{
    Person.findOneAndUpdate(req.params.id,req.body,(err)=>{
        if(err){
            res.status(400).json({isUpdated:false})
        }
        else{
            res.status(201).json({isUpdated:true})
        }
    })
})

module.exports=router;