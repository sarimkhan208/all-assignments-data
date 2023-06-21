const http=require("http")
const fs=require("fs")
const path=require("path")

// create the server 
const server = http.createServer((req,res)=>{
  fs.stat(`./${req.url}`,(err,stats)=>{
    if(err){
        res.writeHead(404,{"Content-type":"text"})
        res.end("404 Not Found")
        return;
    }
    if(stats.isDirectory()){
        res.setHeader("Content-type","text/html")
        let  htmlData=""
        let data=fs.readdirSync(`./${req.url}`,"utf-8")
        data.forEach((el)=>{
            let url=path.join(req.url,el)
            htmlData+=`<li><a href="${url}">${el}</a></li>`
        })

        res.writeHead(200,{"Content-type":"text/html"})
        res.end(`<ul>${htmlData}</ul>`,"utf-8")
    }else{
        fs.readFile(`./${req.url}`,"binary",(err,content)=>{
            if(err){
                res.writeHead(404,{"Content-type":"text"})
                res.end(err)
            }else{
                res.end(content,"binary")
            }
        })
    }
  })
    
})

server.listen(4500)
module.exports = server














// //  import required modules from nodejs 
// const http = require("http")
// const path = require("path")
// const fs = require("fs")
// const currDir = __dirname




// fs.readdir(currDir,(err,files)=>{
//     if(err){
//         console.log("error")
//     }else{
//         console.log(files)
//     }
// })

// // create the server 
// const server = http.createServer((req,res)=>{

//     if(req.url === "/"){
//         fs.readdir(currDir,(err,files)=>{
//             res.setHeader('Content-Type', 'text/html');
//             if(err){
//                 res.end("error")
//             }else{
//                 res.write('<ul>');
//                 files.forEach(file => {
//                     res.write(`<li><a href="${file}"}>${file}</a></li>`);
//                 });
//                 res.write('</ul>');
//                 res.end();
                
//                 // res.end(files[0])
//             }
//         })
//     }

// })

// server.listen(3005,()=>{
//     console.log("Server is running at port 3005")
// })

// // export the server 
// module.export = server
