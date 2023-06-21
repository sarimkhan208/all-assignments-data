const express = require("express")
const { RegisterModel } = require("../model/registerModel")
const Validator = require("../middleware/validator")

const RegisterRouter = express.Router()

RegisterRouter.post("/",Validator,async (req,res)=>{
    try{
        const data = RegisterModel(req.body)
        await data.save()
        res.send("registration done")
    }catch(Err){
        res.send(Err)
    }
})

module.exports = {
    RegisterRouter
}

// {
//     "name":"sarim",
//     "email":"sarimkhan@gmail.com",
//     "password":1223
//   }