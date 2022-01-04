const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
   {
     
    name:{
        type:String,
        unique:true,
        required:[true, 'name required'],
        minlength:3

    }, 
    email:{
        required:[true, 'e-mail address required'],
        unique:[true,'existing email addresss '],
        type:String,
        lowercase:true
    },
    password:{
        type:String,
        unique:true,
        required:[true, 'hased password required']
       
    } 
   
} 
)
const user =mongoose.model('user',userSchema);

module.exports=user;