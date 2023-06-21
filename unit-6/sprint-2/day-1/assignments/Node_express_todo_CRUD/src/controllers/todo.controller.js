const fs = require("fs")
const {Router} = require("express")
const { render } = require("..")
const router = Router()

router.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.send(data.todos)
})

router.post("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.todos.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send(data.todos)
})

router.put("/:id",(req,res)=>{
    const {id} = req.params
    let flag=false
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0; i<data.todos.length; i++){
        if(data.todos[i].id == id){
            flag=true
        }
    }
    if(flag==false){
        res.status(400).send("Invalid argument")
    }
    else{
        for(let i=0; i<data.todos.length; i++){
            if(data.todos[i].id == id){
                data.todos[i] = req.body
            }
        }
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.send(data.todos)
    }
    
})

router.delete("/:id",(req,res)=>{
    const {id} = req.params
    let flag=false
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0; i<data.todos.length; i++){
        if(data.todos[i].id == id){
            flag=true
        }
    }
    if(flag==false){
        res.status(400).send("Invalid argument")
    }
    else if(flag==true){
        data.todos = data.todos.filter((el)=>{
            return el.id !== +id
        })
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.send(data.todos)
    }

})

module.exports = router;