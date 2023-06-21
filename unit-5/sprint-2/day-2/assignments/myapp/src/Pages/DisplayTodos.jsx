
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getTodoFailureAction, getTodoRequestAction, getTodoSuccessAction } from '../Redux/Todo/action'

const url = '  http://localhost:8080/todos'
export default function DisplayTodos(){
    let navigate = useNavigate()
    
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()


    const getData = ()=>{
        dispatch(getTodoRequestAction())
        axios.get(url)
        .then((res)=>dispatch(getTodoSuccessAction(res.data)))
        .catch((err)=>dispatch(getTodoFailureAction()))
    }
    

    useEffect(()=>{
        getData()
    },[])

    const toggle = (id,status)=>{
        axios.patch(`${url}/${id}`,{status : !status})
        .then((res)=>getData())
        .catch((err)=>console.log(err))
    }

    const handleHome = ()=>{
        return navigate('/')
    }
    


    return <div>
        <h1>List of Todos</h1><button onClick={handleHome} >Go Home</button>
        {
            todos.length>0 && todos.map((el)=>(
                <div key={el.id} onClick={()=>toggle(el.id,el.status)} >
                    {el.title} - {el.status?"Completed":"Not Completed"}
                </div>
            ))
        }
    </div>
}