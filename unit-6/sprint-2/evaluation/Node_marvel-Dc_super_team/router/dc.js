const fs = require("fs")
const express = require("express")
const dcRouter = express.Router()
const validator = require("../middleware/validator")

dcRouter.post("/addnew",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.dc.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("New superhero has been added")

})


dcRouter.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.send(data.dc)
})

dcRouter.get("/update/:id",(req,res)=>{
    let id = req.params.id
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    const filter = data.dc.filter((el)=>el.id==id)
    res.send(filter[0])
})




dcRouter.use(validator)

dcRouter.patch("/update:id",(req,res)=>{
    let id = +req.params.id
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let newData = data.dc.map((el)=>{
        if(el.id==id){
            return {
                ...el,...req.body
            }
        }
        return el
    })
    fs.writeFileSync("./db.json",JSON.stringify({...data , dc:[newData]}))
    res.send("Patched Character Details")
})


dcRouter.delete("/delete/:id",(req,res)=>{
    let id = +req.params.id
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let newData = data.dc.filter((el)=>el.id!==id)
    fs.writeFileSync("./db.json",JSON.stringify({...data , dc:newData}))
    res.send("Deleted Character Details")
})



module.exports = {dcRouter}