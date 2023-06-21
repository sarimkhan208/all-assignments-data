const validator = (req,res,next) =>{
    if(req.method == "DELETE" || req.method == "PATCH"){
        if(req.query.role == "leader" && req.query.pass == "4534"){
            next()
        }
        else{
            res.send("You are not authorised to do this operation")
        }
    }
}

module.exports = validator