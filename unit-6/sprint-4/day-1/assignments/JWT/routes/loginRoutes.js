const express = require("express")
const UserModel = require("../model/user.model")
const loginRouter = express.Router()
var jwt = require('jsonwebtoken');





loginRouter.post("/login",async(req,res)=>{
    const {email,pass} = req.body
    try{
        const user = await UserModel.findOne({email,pass})
        if(user){
            var token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: 'foobar'
            }, 'sarim');
            // var token = jwt.sign({ foo: 'bar' }, 'sarim')
            res.status(200).send({"msg":"Login Successfull","token":token})
        }else{
            res.status(200).send({"msg":"Wrong Credentials"})
        }
        
    }catch(err){
        res.status(400).send({"Err":err.message})
    }
})

module.exports = loginRouter