import { useState } from "react"

export default function TodoInput({addTodo}){
    const [task,setTask] = useState("")
    const handleClick = ()=>{
        console.log("meydata" , task)
        addTodo(task)
        setTask("")
    }
    return <div>
        <input value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleClick} >Add</button>
    </div>
}