const express = require("express")
const {connection,UserModel} = require("./model")
const app = express()

app.use(express.json())


// Get the Movie
app.get("/movies",async (req,res)=>{
    const {pagenum,minrating,maxrating,title} = req.query
    const limit=10
    let searchRegex;
    if(minrating & maxrating){
        const movies = await UserModel.find({ rating: { $gte: minrating, $lte: maxrating } }).skip(limit*+pagenum-limit).limit(limit)
        res.send(movies)
    }else if(title){
        searchRegex = new RegExp(title, "i");
        const movies = await UserModel.find({title: { $regex: searchRegex }}).skip(limit * +pagenum - limit).limit(limit);
        res.send(movies);
    }
    else{
        const movies = await UserModel.find().skip(limit*+pagenum-limit).limit(limit)
        res.send(movies)
    }
        
})


// Add the Movie
app.post("/addmovie",async (req,res)=>{
    const movie = new UserModel(req.body)
    await movie.save()
    res.send("movie has been added")
})

// Update the movie

app.patch("/updatemovie/:id",async (req,res)=>{
    const {id} = req.params
    try{
        await UserModel.findByIdAndUpdate({_id:id},req.body)
        res.send("movie has been updated")
    }catch(err){
        res.send(err)
    }
})

// Delete the movie
app.delete("/deletemovie/:id",async (req,res)=>{
    const {id} = req.params
    try{
        await UserModel.findByIdAndDelete({_id:id})
        res.send("Movie has been deleted")
    }catch(err){
        res.send(err)
    }
})








app.listen(4500, async ()=>{
    try{
        await connection
        console.log("Connected to mongoDB")
    }catch(err){
        console.log(err,"error occured")
    }
    console.log("Server is runiing")
})