const mongoose = require("mongoose")
require('dotenv').config()
const connection = mongoose.connect(process.env.mongoURL)

const todoSchema = mongoose.Schema({
    title : String,
    status : Boolean
},{versionKey:false})

const TodoModel = mongoose.model("todo",todoSchema)


module.exports={connection,TodoModel}

