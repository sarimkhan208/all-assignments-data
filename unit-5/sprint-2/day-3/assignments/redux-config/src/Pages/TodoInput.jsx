import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addgetTodoFailed, addTodoSuccess, getTodoFailed, getTodoRequest, getTodoSuccess } from "../Redux/Todo/action"

export default function TodoInput({addTodo}){

    const [task,setTask] = useState("")
    const dispatch = useDispatch()

    const handleAdd = ()=>{
        addTodo(task)
        setTask("")
    }


    return <div>
        <input value={task} onChange={(e)=>setTask(e.target.value)} /><button onClick={handleAdd} >ADD TODO</button>
    </div>
}