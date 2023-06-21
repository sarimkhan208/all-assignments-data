const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb://127.0.0.1:27017/movieStore")

const userScheme = mongoose.Schema({
    title:String,
    rating:Number,
    genre:String
},{versionKey:false})

const UserModel = mongoose.model("user",userScheme)

module.exports = {
    connection,
    UserModel
}