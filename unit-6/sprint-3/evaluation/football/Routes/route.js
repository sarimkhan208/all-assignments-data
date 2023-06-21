const express = require("express")
const playerRoute = express.Router()
const {PlayerModel} = require("../models/playerModel")
const fieldAnalyzer = require("../middleware/fieldAnalyzerMW")
const record = require("../middleware/recordMW")
const updateLimiter = require("../middleware/updateLimiter")

// ADD THE PLAYER TO THE DATABASE

playerRoute.post("/add", async (req,res)=>{
    try{
        const data = new PlayerModel(req.body)
        console.log("here")
        await data.save()
        res.status(200).json({msg:"Player has been added to the Database",data:req.body})
    }catch(err){
        res.status(200).json({err:"Unable to add player soething went wrong",Error:err})
    }
})

// GET THE PLAYERS FROM DATABASE
playerRoute.get("/",async (req,res)=>{
    const abovegoal = req.query.abovegoal
    const belowgoal = req.query.belowgoal
    const nationality = req.query.nationality
    const page = req.query.page || 1
    const limit = req.query.limit || 3
    const skip = (page-1)*limit

    let data = PlayerModel.find()

    try{
        if(abovegoal){
            data.find({goals : {$gte:abovegoal}})
        }
        if(belowgoal){
            data.find({goals : {$lte:belowgoal}})
        }
        if(nationality){
            data.find({nationality:nationality})
        }
        
        const playerData = await data.skip(skip).limit(limit)
        res.send( playerData)
    }catch(Err){
        res.status(400).json({msg:"Something went wrong",err:Err})
    }
})

// GET A SINGLE PLAYER BY ID
playerRoute.get("/single/:id" ,async (req,res)=>{
    const {id} = req.params
    try{
        const data = await PlayerModel.find({_id:id})
        res.send(data)
    }catch(Err){
        res.status(400).json({msg:"Something went wrong",err:Err})
    }
})

// GET TOP 5 PLAYERS BY GOALS
playerRoute.get("/top",async(req,res)=>{
    try{
        let data = await PlayerModel.find().sort({goals:-1}).limit(5)
        res.send(data)
    }catch(Err){
        res.status(400).json({msg:"Something went wrong",err:Err})
    }
})





// DELETE THE PLAYER
playerRoute.delete("/delete/:id", record ,async (req,res)=>{
    const {id} = req.params
    try{
        await PlayerModel.findByIdAndDelete({_id:id})
        res.status(200).json({msg:`The Player id ${id} has been deleted`})
    }catch(Err){
        res.status(400).json({msg:"Something went wrong",err:Err})
    }
})

// playerRoute.use(updateLimiter)

// UPDATE THE PLAYER
playerRoute.patch("/update/:id", record ,async (req,res)=>{
    const {id} = req.params
    try{
        await PlayerModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).json({msg:`The Player id ${id} has been updated`,data : req.body})
    }catch(Err){
        res.status(400).json({msg:"Something went wrong",err:Err})
    }
})



module.exports = playerRoute