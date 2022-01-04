const mongoose = require('mongoose');



const PersonSchema= new  mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minlength:3,
            default:'name'
        }
        ,
        age:{
            
            type:Number,
            required:true,
            minlength:1,
            default:10
            
        },
        salary:{
            type:Number,
             required:true,
            minlength:3,
            default:1.32
            
        }
    }
);

const Person=mongoose.model('Person',PersonSchema);

module.exports =Person;