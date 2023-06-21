import { useState } from "react"


export default function TodoInput({handleTask}){
    let obj = {
        title : "",
        status : false
    }

    const [content,setContent] = useState("")


    function handleClick(e){
        let obj={}
        obj.title = content
        obj.status = false
        handleTask(obj)
    }

    const {title , status} = obj

   
    

    return <>
        <input data-testid = 'todo-input' onChange={(e)=>setContent(e.target.value)} />
        <button  data-testid ='add-button'onClick={()=>handleClick()} >Add Todo</button>
    </>
}