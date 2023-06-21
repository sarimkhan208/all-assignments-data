const fs = require("fs")
const express = require("express")
const validator = require("../middleware/validator")
const marvelRouter = express.Router()

marvelRouter.post("/addnew",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.marvel.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("New superhero has been added")

})


marvelRouter.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.send(data.marvel)
})


marvelRouter.get("/:id",(req,res)=>{
    let id = req.params.id
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    const filter = data.marvel.filter((el)=>el.id==id)
    res.send(filter[0])
})

marvelRouter.use(validator)

marvelRouter.patch("/update/:id",(req,res)=>{
    let id = +req.params.id
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let newData = data.marvel.map((el)=>{
        if(el.id==id){
            return {
                ...el,...req.body
            }
        }
        return el
    })
    // for(let i=0; i<data.marvel.length; i++){
    //     if(data.marvel[i].id == id){
    //         {...data[i]}
    //     }
    // }
    console.log(newData,"here")
    fs.writeFileSync("./db.json",JSON.stringify({...data , marvel:newData}))
    res.send("Patched Character Details")
})

marvelRouter.delete("/delete/:id",(req,res)=>{
    let id = +req.params.id
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let newData = data.marvel.filter((el)=>el.id!==id)
    fs.writeFileSync("./db.json",JSON.stringify({...data , marvel:newData}))
    res.send("Deleted Character Details")
})


module.exports = {marvelRouter}