var mongoose = require("mongoose");
var contactSchema = new mongoose.Schema({
    name:{
        type:String, 
        required : true 
    },
    mobile:{ 
        type:String,
        unique : true, 
        required : true 
    } 
});

module.exports = mongoose.model("contact",contactSchema);