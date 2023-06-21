const fs = require("fs");

// make the validator function and export it.
const validatorfunction = (req,res,next)=>{
    
    const {ID,Name,Rating,Description,Genre,Cast} = req.body

    if( ID == undefined ||
        Name == undefined ||
        Rating == undefined ||
        Description == undefined || 
        Genre == undefined || 
        Cast == undefined){
            fs.appendFileSync('./res.txt',`invalid request body.\n`)
            res.status(400).send('invalid request body.')
            return 
    }


    if( typeof ID !== "number" ||
        typeof Name !== "string" || 
        typeof Rating !== "number" || 
        typeof Description !== "string" || 
        typeof Genre !== "string"){
        fs.appendFileSync('./res.txt',`\nbad request.some data is incorrect.`)
        res.status(400).send('bad request.some data is incorrect.')    

    }
    else{
        if(typeof ID == "number"){
            fs.appendFileSync('./res.txt',`\nID is a number`)
        }
        let flag=true

        for(let i=0; i<Name.length; i++){
            if(!isNaN(Name[i])){
                return res.status(400).send('bad request.some data is incorrect.')
            }
        }
    

        if(flag){
            fs.appendFileSync('./res.txt',`\nName is a string`)
        }
        
        if(typeof Rating == "number"){
            fs.appendFileSync('./res.txt',`\nRating is a number`)
        }

        if(typeof Description == "string"){
            fs.appendFileSync('./res.txt',`\nDescription is a string`)
        }
        if(typeof Genre == "string"){
            fs.appendFileSync('./res.txt',`\nGenre is a number`)
        }

        if(Array.isArray(Cast) && Cast.map((el)=> typeof el == "string")){
            fs.appendFileSync('./res.txt',`\nCast is a array of string`)
        }
        
        next()


    }
    
}

module.exports = validatorfunction;
