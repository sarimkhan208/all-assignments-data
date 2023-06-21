const express = require("express")
const todoRouter = express.Router()
const {TodoModel} = require("../Model/todoModel")


// read
todoRouter.get("/",async (req,res)=>{
    try{
        const todos = await TodoModel.find()
        res.send(todos)
    }catch(err){
        res.send(err)
    }
})


// create
todoRouter.post("/create",async (req,res)=>{
    console.log(req.body)
    try{
        const todo = new TodoModel(req.body)
        await todo.save()
        res.send("Todo has been created")
    }catch(err){
        res.send("Some error occured",err)
    }
})

// update
todoRouter.patch("/update/:id",async (req,res)=>{
    const {id} = req.params
    try{
        await TodoModel.findByIdAndUpdate({_id:id},req.body)
        res.send("todo has been update")
    }catch(err){
        res.send(err)
    }
})

// delete
todoRouter.delete("/delete/:id",async (req,res)=>{
    const {id} = req.params
    try{
        await TodoModel.findByIdAndDelete({_id:id})
        res.send("todo has been delete")
    }catch(err){
        res.send(err)
    }
})

module.exports={todoRouter}