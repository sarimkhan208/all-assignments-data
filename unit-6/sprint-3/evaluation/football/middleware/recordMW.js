
const fs = require("fs")
// Record MW will record the Data of update and delete method
const record = (req,res,next)=>{
    const {id} = req.params
    if(req.method == "DELETE"){
        fs.appendFileSync("./record.txt",`\nThe player with id:${id} has been updated |${Date()}`)
    }else{
        fs.appendFileSync("./record.txt",`\nThe player with id:${id} has been deleted |${Date()}`)
    }
    next()
}

module.exports = record