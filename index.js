const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs=require('ejs')
const path=require('path')
const port = process.env.PORT || 3000;

//database connection
const db = require('./src/models/db_connection')

//used for  static pages css/js/images etc
const publicDirectory=path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

// Set view engine to use
app.set('view engine', 'ejs');//view engine configured

// Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, './src/views/'));

//FOR POSTMAN
app.use(express.json())

//  GETTING DATA FROM POST REQUEST  
app.use(express.urlencoded({extended: true}));

// define routes for handle request
app.use('/',require('./src/routes/index'))

app.listen(port,()=>{
    console.log("Server has started and listening port is "+port)
})
