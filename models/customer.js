var mongoose=require("mongoose");

var Schema = mongoose.Schema;
var schema=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    city:String,
    balance:Number
});
module.exports=mongoose.model('Customer',schema);