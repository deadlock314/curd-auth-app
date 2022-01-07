const mongoose = require('mongoose');



const PersonSchema= new  mongoose.Schema(
    {
        name:{
            type:String, required:true,minlength:3,default:'name'
        }
        ,
        DOB:{
            type:Date ,required:true, minlength:3,default:'DOB'
        },
        imgUrl:{
            type:String ,required:true,default:'imgUrl'
        },
        city:{
            type:String ,required:true,default:'city'
        },
        country:{
            type:String ,required:true,default:'country'
        },
    }
);

const Person=mongoose.model('Person',PersonSchema);

module.exports =Person;