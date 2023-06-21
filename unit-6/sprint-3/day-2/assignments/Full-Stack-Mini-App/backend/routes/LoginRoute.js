const express = require("express")
const { RegisterModel } = require("../model/registerModel")
const loginRouter = express.Router()

loginRouter.post("/",async (req,res)=>{
    const {email,password} = req.body
    let loginEmail = await RegisterModel.find({email:email})
    let loginPass = await RegisterModel.find({password:password})
    if(loginEmail.length && loginPass.length){
        res.send("Login successfull")
    }else{
        res.send("credential dosent matches")
    }
    
})

module.exports = loginRouter