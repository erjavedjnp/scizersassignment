var mongoose = require("mongoose");
var contactSchema = new mongoose.Schema({
    name:{
        type:String 
    },
    mobile:{
        type:String 
    } 
});
module.exports = mongoose.model("contact",contactSchema);