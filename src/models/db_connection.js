
const mongoose=require('mongoose');
const uri = "mongodb+srv://erjaved:Javed123456789@cluster0.etdix.mongodb.net/erjaved?retryWrites=true&w=majority";
mongoose.connect(uri,{useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true},(err)=>{
    if(!err){
        console.log('success running database and connected to database');
    }
    else {
        console.log("database connection failed");
    }
})

//mongoose.Promise = Promise;

//schema registration for contact

require('./contact')