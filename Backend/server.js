

const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors=require('cors')();
const cookieParser=require('cookie-parser');
require('dotenv').config();

mongoose.Promise = global.Promise;
// two middlewars
// to ignore cross origin request error 
server.use(cors);

//to sent and recive data in json format
server.use(express.json());

//to work with cookie easily
server.use(cookieParser());

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

server.use('/',SignUpRoute);
server.use('/',logInRoute);
server.use('/routes',routes);
