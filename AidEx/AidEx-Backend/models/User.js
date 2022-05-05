const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : String,
    password : String,
    username : String,
    phonenumber : String,
    address : String,
    aadharcard : String,
    description : String,
    age : String,
    image : String,
    tags : {type : String, default : ""},
    freetime : String,
    time : String,
    gender : String,
    rating : {type : Number, default : 0}
}, {timestamps : true })

const User = mongoose.model("user", userSchema);

module.exports = User
