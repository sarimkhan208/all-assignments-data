import { useState } from "react"
import {useDispatch} from 'react-redux'
import { getData, getTodoSuccess, postData } from "../Redux/action"

export default function TodoInput(){
    const [task,setTask] = useState("")
    const dispatch = useDispatch()

    const handleAdd = ()=>{
        dispatch(postData(task)).then(()=>dispatch(getData))
    }
    return <div>
        <input value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleAdd} >ADD TASK</button>
    </div>
}