const express = require("express")
const UserModel = require("../model/user.model")
const registerRouter = express.Router()

registerRouter.post("/register",async(req,res)=>{
    try{
        const user = new UserModel(req.body)
        await user.save()
        res.status(200).send({"msg":"User has been registered"})
    }catch(err){
        res.status(400).send({"Err":err.message})
    }
})

module.exports = registerRouter