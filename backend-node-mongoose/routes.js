const router=require('express').Router();
let Person = require('./schema');

router.route('/').get((req,res)=>{

    
    Person.find().then(persons=>res.json(persons)).catch(err=>res.status(400).json('errpor'));
   
});

router.route('/post').post((req,res)=>{
    const person=req.body;

    const newPerson = new Person(person);

    newPerson.save().then(res.json({userAdded:true})).catch(res.status(400).json({userAdded:false}));

});

router.route('/delete/:id').delete((req,res)=>{
    Person.findByIdAndDelete(req.params.id).then(res.json({userDelete:true})).catch(res.status(400).json({userDelete:false}))

});

router.route('/update/:id').post((req,res)=>{
    Person.findOneAndUpdate(req.params.id,req.body).then(res.status(200).json({isUpdatedPerson:true})).catch(res.status(400).json({userete:false}));
})

module.exports=router;