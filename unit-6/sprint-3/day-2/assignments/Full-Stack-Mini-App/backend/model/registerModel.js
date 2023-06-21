const mongoose = require("mongoose")

const registerSchema =  mongoose.Schema({
    firstname : String,
    lastname:String,
    email : String,
    password : Number
},{versionKey:false})

const RegisterModel = mongoose.model("register" , registerSchema )


module.exports = {RegisterModel}

