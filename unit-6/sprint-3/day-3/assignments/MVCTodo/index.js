const express = require("express")
const {todoRouter} = require("./Controller/routes")
const {connection} = require("./Model/todoModel")
const app = express()

app.use(express.json())
app.use("/todos",todoRouter)




app.listen(4500,async ()=>{
    try{
        await connection
        console.log("Connected to mongoDB")
    }catch(err){
        console.log("some error occured",err)
    }
    console.log("server us running at 4500")
})