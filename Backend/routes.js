const router=require('express').Router();
let Person = require('./schema/personSchema');

router.route('/').get((req,res)=>{

    
    Person.find({},(err,doc)=>{
         if(err){
             res.end(err);
         }
         else{
            res.json(doc)
         }
    })
   
});

router.route('/post').post((req,res)=>{
    const person=req.body;

    const newPerson = new Person(person);

    newPerson.save((err)=>{
        if(err){
           res.status(400).json({userAdded:false})
        }
        else{
           resstatus(201).json({userAdded:true}) 
        }
    })

});

router.route('/delete/:id').delete((req,res)=>{
    Person.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
             res.status(400).json({userDelete:false})
        }
        else{
             res.status(200).json({userDelete:true})
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