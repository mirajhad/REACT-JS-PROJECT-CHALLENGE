const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn')
// const User = require('./model/userSchema');

app.use(express.json());

//linking router file to make our routes
app.use(require('./router/auth'));

const PORT = process.env.PORT;




//LOGIN
app.get('/signin',(req, res)=>{
    res.send(`hello Login from server`)
})

//REGISTER
app.get('/signup',(req, res)=>{
    res.send(`hello Register world from server`)
})

//app listening
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})