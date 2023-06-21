const mongoose = require("mongoose")

const avengerSchema =  mongoose.Schema({
    image : String,
    name : String,
    power : String,
    city : String
},{versionKey:false})

const AvengerModel = mongoose.model("avenger" , avengerSchema )


module.exports = {AvengerModel}

