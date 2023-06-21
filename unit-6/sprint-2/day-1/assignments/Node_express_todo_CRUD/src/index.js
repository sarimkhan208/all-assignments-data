//  import required modules from nodejs and build the server

const express  =require("express")
const app = express()
const router = require("./controllers/todo.controller")


app.use(express.json())
app.use("/",router)


// app.listen(5000,()=>{
//     console.log("Your Server is running")
// })


// export the server
module.exports = app;
