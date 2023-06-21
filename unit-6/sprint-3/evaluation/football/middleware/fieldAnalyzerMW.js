
// Filed Analyzer Middleware analyzes the field

const fieldAnalyzer = (req,res,next)=>{
    let data = req.body
    if(data.player_name && data.position && data.team && data.goals && data.assists && data.nationality && data.age && data.mutable){
        if(data.age<18 || data.age>40){
            res.send("err : You are not eligible to Play")
        }
        if(data.goals <= 50 || data.assists <20){
            res.send("err : You are not eligible to Play")
        }
    }else{
        res.send("err: Few fields are missing, cannot process the request")
    }
    next()
}


module.exports = fieldAnalyzer