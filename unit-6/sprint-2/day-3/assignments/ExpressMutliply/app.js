// your code goes here
const express = require("express")
const app = express()
// app.use(express.json())

app.get("/multiply",(req,res)=>{
    
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if(!isNaN(a) && !isNaN(b)){
        res.status(200).send({ product: a*b })
    }
    else if(isNaN(a) && isNaN(b)){
        res.status(400).send({error:'Both "a" and "b" are required parameters'})
    }
    else if(isNaN(a)){
        res.status(400).send({error: '"a" is not a valid number'})
    }
    else if(isNaN(b)){
        res.status(400).send({ error: '"b" is not a valid number' })
    }
})


// app.listen(5500,()=>{
//     console.log("Your server is running")
// })

module.exports = app