const express = require("express")
const playerRoute = require("./Routes/route")
const { connection } = require("./models/playerModel")
const app = express()
app.use(express.json())
app.use("/players",playerRoute)

app.listen(8080,async ()=>{
    try{
        await connection
        console.log("Server is running at 8080 and connected to mongoDB")
    }
    catch(err){
        console.log("some error occured",err)
    }
})
