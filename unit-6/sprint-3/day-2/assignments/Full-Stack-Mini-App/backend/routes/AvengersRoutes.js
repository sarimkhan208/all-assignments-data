const express = require("express")
const { AvengerModel } = require("../model/avengersmodels")
const avengerRouter = express.Router()


avengerRouter.post("/add",async (req,res)=>{
    try{
        let data = new AvengerModel(req.body)
        await data.save()
        res.send("New Avenger has been added to the database")
    }catch(err){
        res.send("error occured ",err)
    }
})


avengerRouter.get("/",async(req,res)=>{
    try{
        let data = await AvengerModel.find()
        res.send(data)
    }catch(Err){
        res.send(Err)
    }
})

avengerRouter.patch("/update/:id",async (req,res)=>{
    const {id} = req.params
    try{
        await AvengerModel.findByIdAndUpdate({_id:id},req.body)
        res.send("Avnger data has been updated")
    }catch(Err){
        res.send(Err)
    }
})

avengerRouter.delete("/delete/:id",async (req,res)=>{
    const {id} = req.params
    try{
        await AvengerModel.findByIdAndDelete({_id:id})
        res.send("Avnger data has been deleted")
    }catch(Err){
        res.send(Err)
    }
})

module.exports = {
    avengerRouter
}

