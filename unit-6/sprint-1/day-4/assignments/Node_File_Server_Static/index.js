const http = require("http");
const fs = require("fs");
const path = require("path")
const PORT = 7700;

const server = http.createServer((req,res)=>{
    fs.stat(`./${req.url}`,(err,stats)=>{
        if(err){
            res.writeHead(404,{"Content-type":"text"})
            res.end("404 Not Found")
            return
        }
        if(stats.isDirectory()){
            res.setHeader("Content-type","text/html")
            let html=""
            let data = fs.readdirSync(`./${req.url}`,'utf-8')
            data.forEach((el)=>{
                let url=path.join(req.url,el)
                html+=`<li><a href=${url}>${el}</a></li>`
            })
            res.writeHead(200,{"Content-type":"text/html"})
            res.end(`<ul>${html}</ul>`,"utf-8")
        }
        else{
            fs.readFile(`./${req.url}`,"binary",(err,mydata)=>{
                if(err){
                    res.writeHead(404,{"Content-type":"text"})
                    res.end(err)
                }
                else{
                    res.end(mydata,"binary")
                }
            })
        }
    })
}) ;

// export your server
server.listen(7700)
module.exports=server