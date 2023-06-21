import { useEffect } from "react";
import { getData } from "../Redux/action";
import TodoInput from "./TodoInput";
import { useSelector , useDispatch } from 'react-redux'
import TodoList from "./TodoList";
export default function Todo(){


    const dispatch = useDispatch()
    const todos = useSelector((state)=>state.todos)
    
    

    useEffect(()=>{
        dispatch(getData)
    },[])


    return <div>
        {<TodoInput/>}
        {<TodoList data={todos} />}
    </div>
}