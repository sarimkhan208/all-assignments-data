// your code goes here


const express = require("express")
const app = express()
app.use(express.json())

app.get("/sum",(req,res)=>{
    
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if(!isNaN(a) && !isNaN(b)){
        res.send({ sum: a+b })
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

app.listen(8080,()=>{
    console.log("Your server is running")
})

// exports.module = app
// donot chnage the below code
module.exports = app;
