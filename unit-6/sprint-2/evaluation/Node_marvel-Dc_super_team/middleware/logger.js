const fs = require("fs")

const logger = (req,res,next)=>{
    console.log(req.headers['user-agent'])
    fs.appendFileSync("./logs.txt",`Method:${req.method}, Route:${req.url}, user-agent:${req.headers['user-agent']}\n`)
    next()
}

module.exports = logger