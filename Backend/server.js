
const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const cookieParser=require('cookie-parser');
require('dotenv').config();
const cookieCredentialsMiddleware=require('./middleware/cookieCredentialsMid')

const server = express();


server.use(cookieParser());

mongoose.Promise = global.Promise;

// two middlewars
// to ignore cross origin request error 
server.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }
));


server.use(cookieCredentialsMiddleware);

//to sent and recive data in json format
server.use(express.json());

//to work with cookie easily


mongoose.connect(process.env.DB_URI,{
});
mongoose.connection.once('open',(err)=>{
    if(!(err))
   {
       server.listen(5000,(err)=>{
    console.log('server is up and running and db connected');
})
   }
    else
    console.log('db connected');
});




const routes=require('./routes');
const SignUpRoute=require('./auth/authRoute/signUpRoute');
const logInRoute=require('./auth/authRoute/logInRoute');
const logOutRoute=require('./auth/authRoute/logOutRoute');
server.use('/',SignUpRoute);
server.use('/',logInRoute);
server.use('/',logOutRoute);
server.use('/routes',routes);
