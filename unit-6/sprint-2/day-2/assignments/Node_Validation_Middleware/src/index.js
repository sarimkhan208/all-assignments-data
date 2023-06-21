//  import required modules from nodejs and build the server
const fs = require("fs")
const express = require("express")
const validatorfunction = require("./middlewares/validator")
const app = express()
app.use(express.json())
// app.use(validator)

app.use(validatorfunction)

app.post("/",(req,res)=>{
    res.status(200).send("data received")
})


// app.listen(5500,()=>{
//     console.log("Your server is running")
// })

// export the server
module.exports = app

