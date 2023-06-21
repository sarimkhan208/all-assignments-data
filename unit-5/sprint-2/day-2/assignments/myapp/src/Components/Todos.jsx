import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addTodoFailureAction, addTodoSuccessAction } from "../Redux/Todo/action";
import TodoInput from "./TodoInput";

const url = 'http://localhost:8080/todos'

export default function Todos(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const postData = async (newObj)=>{
        axios.post(url,newObj)
        .then((res)=>dispatch(addTodoSuccessAction(res.data)))
        .catch((err)=>dispatch(addTodoFailureAction()))
    }

    const addTodo = (data)=>{
        
        let newObj = {
            title : data,
            status : false
        }
        postData(newObj)

        return navigate('/todo')
    }

    return <div>
        <h1> Todo</h1>
        <TodoInput addTodo={addTodo} />
    </div>
}