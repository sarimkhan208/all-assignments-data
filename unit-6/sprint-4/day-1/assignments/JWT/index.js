const express = require("express")
const connection = require("./db")
const registerRouter = require("./routes/registerRoutes")
const loginRouter = require("./routes/loginRoutes")
const app = express()
const jwt = require("jsonwebtoken")
app.use(express.json())

app.use("/user",registerRouter)
app.use("/user",loginRouter)

app.get("/",(req,res)=>{
    res.send("home page")
})



app.get("/product",(req,res)=>{
    const {token} = req.query
    jwt.verify(token, 'sarim', function(err, decoded) {
        if(decoded){
            res.send("Product Page")
        }else{
            res.send("Please Login first")
        }
    });
    
})

app.get("/posts",(req,res)=>{
    const {token} = req.query
    jwt.verify(token, 'sarim', function(err, decoded) {
        if(decoded){
            res.send("Posts Page")
        }else{
            res.send("Please Login first")
        }
    });
})

app.get("/todos",(req,res)=>{
    const {token} = req.query
    jwt.verify(token, 'sarim', function(err, decoded) {
        if(decoded){
            res.send("Todos Page")
        }else{
            res.send("Please Login first")
        }
    });
})

app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to MongoDB")
    }catch(err){
        console.log("Some error occured")
        console.log(err)
    }
    console.log("Server is running at 8080")
})