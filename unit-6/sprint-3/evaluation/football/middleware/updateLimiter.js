const {PlayerModel} = require("../models/playerModel")
const updateLimiter = async (req,res,next)=>{
    const {id} = req.params
    try{
        const data = await PlayerModel.find({_id:id})
        if(data.mutable){
            next()
        }else{
            res.send("This Player is not mutable")
        }
    }catch(Err){
        res.status(400).json({msg:"Something went wrong",err:Err})
    }
}

module.exports = updateLimiter