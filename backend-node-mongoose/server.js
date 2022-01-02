

const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors=require('cors')();
require('dotenv').config();

mongoose.Promise = global.Promise;
// two middlewars
// to ignore cross origin request error 
server.use(cors);

//to sent and recive data in json format
server.use(express.json());
 server.get('/',(req,res)=>{
     res.json({isSiteLoaded:true})
 })

mongoose.connect(process.env.DB_URI,{
});
mongoose.connection.once('open',(err)=>{
    if(err)
    console.log('db not connected');
    else
    console.log('db connected');
});
const routes=require('./routes');
server.use('/routes',routes);

server.listen(5000,(err)=>{
    console.log('server is up and running');
})