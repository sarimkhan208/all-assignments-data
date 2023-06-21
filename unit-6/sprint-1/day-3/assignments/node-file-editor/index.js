const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];


switch (operation) {
  // complete the fillowing function.
  case 'read':
    return (fs.readFile(file,'utf-8',(err,data)=>{
      if(err){
        console.log(err)
      }else{
        console.log(data)
      }
    }))
  
  case 'delete':
    return (
      fs.unlink(file,(err)=>{
        if(err){
          console.log(err)
        }
        else{
          console.log(`File ${content} deleted`)
        }
      })
    )

  case 'create':
    let write = fs.createWriteStream(file)
    return (
      write.write("", (err)=>{
        if(err){
          console.log(err)
        }else{
          console.log(`File ${file} created`)
        }
      })
    )

  case 'append':
    
    return (
      fs.appendFile(file,content,(err)=>{
        if(err){
          console.log(err)
        }
        else{
          console.log(`Content appended to the file ${file}`)
        }
      })
    )
  case 'rename':
  
    return (
      fs.rename(file,content,(err)=>{
        if(err){
          console.log(err)
        }else{
          console.log(`File ${file} renamed to ${content}`)
        }
      })
  )

  case 'list' :
    return (
      fs.readdir('.',(err,allFiles)=>{
        if(err){
          console.log(err)
        }else{
          allFiles.forEach((file)=>{
            console.log(file)
          })
        }
      })
    )
    
  default:
    console.log(`Invalid operation '${operation}'`);
}
