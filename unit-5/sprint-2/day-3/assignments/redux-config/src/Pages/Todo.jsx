import { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import {  addTodoFailed, addTodoRequest, addTodoSuccess, getTodoFailed, getTodoRequest, getTodoSuccess } from "../Redux/Todo/action";
import { authFalse } from "../Redux/Login/action";

export default function Todo(){

    
    const todo = useSelector((state)=>state.todo.todo)

    const dispatch = useDispatch()

    const getData = ()=>{
        dispatch(getTodoRequest())
        axios.get('http://localhost:8080/todo')
        .then((res)=>dispatch(getTodoSuccess(res.data)))
        .catch((err)=>dispatch(getTodoFailed()))
    }

    const addTodo = (data)=>{
        dispatch(addTodoRequest())
        let obj = {
            title : data,
            status : false
        }
        axios.post("http://localhost:8080/todo",obj)
        .then((res)=>(dispatch(addTodoSuccess(res.data))))
        .catch((err)=>dispatch(addTodoFailed()))
    }

    useEffect(()=>{
        getData()
    },[])

    const handleLogout = ()=>{
        dispatch(authFalse())
    }

    return <div>
        <h1>Todos</h1>
        <button onClick={handleLogout} >Logout</button>
        <TodoInput addTodo={addTodo} />
        {
            todo.length>0 && todo.map((el)=>(
                <div key={el.id} >
                    <h3>{el.title} - {el.sttus?"Complete":"Pending"}</h3>
                </div>
            ))
        }
    </div>
}