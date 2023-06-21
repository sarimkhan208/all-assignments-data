

// Do not forget to export the server.
// e.g => module.exports = server;

const fs = require("fs")
const express = require("express")
const app = express()
const {marvelRouter} = require("./router/marvel")
const {dcRouter} = require("./router/dc")
const logger = require("./middleware/logger")

app.use(express.json())
app.use(logger)


app.use("/marvel",marvelRouter)
app.use("/dc",dcRouter)

app.get("/winningteam",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let dataMarvel = 0
    let dataDC = 0
    // console.log(data)
    for(let i=0; i<data.marvel.length; i++){
        dataMarvel+=data.marvel[i].power_level
    } 
    for(let i=0; i<data.dc.length; i++){
        dataDC+=data.dc[i].power_level
    } 
    if(dataDC>dataMarvel){
        res.send(data.marvel)
    }else{
        res.send(data.dc)
    }
})




app.listen(8000)

module.exports=app
