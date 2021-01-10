const mongoose=require('mongoose');
const uri = "mongodb://localhost:27017/scizer"
mongoose.connect(uri,{useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true},(err)=>{
    if(!err){
        console.log('success running database and connected to database');
    }
    else {
        console.log("database connection failed")
    }
})

//mongoose.Promise = Promise;

//schema registration for contact

require('./contact')