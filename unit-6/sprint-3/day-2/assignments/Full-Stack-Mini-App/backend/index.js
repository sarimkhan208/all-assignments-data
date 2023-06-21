const express = require("express")
const app = express()
const cors =  require("cors")
const { router } = require("./routes/homeRoutes")
const connection = require("./connection/connection")
const { avengerRouter } = require("./routes/AvengersRoutes")
const { RegisterRouter } = require("./routes/RegisterRoutes")
const loginRouter = require("./routes/LoginRoute")


app.use(cors())
app.use(express.json())



app.use("/avengers",avengerRouter)
app.use("/register",RegisterRouter)
app.use("/login",loginRouter)

app.listen(8080, async ()=>{
    try{
        await connection
        console.log("Server is running at port 8080 and connected to the Database")
    }catch(err){
        console.log("Something went wrong while connected to mongoDB",err)
    }
})