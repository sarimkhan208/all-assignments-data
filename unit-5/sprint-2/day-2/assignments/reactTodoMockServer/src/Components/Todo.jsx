import { useEffect } from "react";
import TodoInput from "./TodoInput";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { addTodoFailedAction, addTodoRequestAction, addTodoSuccessAction, getTodoFailedAction, getTodoRequestAction, getTodoSuccessAction } from "../redux/action";
import axios from "axios";


const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`

const Todos = () => {

  const dispatch = useDispatch()
  const todos = useSelector((state)=>state.todos)


  const getData = ()=>{
    dispatch(getTodoRequestAction())
    axios.get(url)
    .then((res)=>dispatch(getTodoSuccessAction(res.data)))
    .catch((err)=>dispatch(getTodoFailedAction()))
  }


  useEffect(()=>{
    getData()
  },[])


  const addTodo = (data)=>{
    addTodoRequestAction()
    let newObj = {
      title : data,
      status : false
    }
    axios.post(url,newObj)
    .then((res)=>dispatch(addTodoSuccessAction(res.data)))
    .catch((err)=>dispatch(addTodoFailedAction()))

  }

  

  return (
    <div>
    {/* add TodoInput component here */}
    <TodoInput addTodo={addTodo} />
    {/* map through the todos array and display the tasks */}
    {
      todos.length>0 && todos.map((el)=>(
        <div key={el.id} data-testid = "todos-wrapper">
          {el.title} - {el.status?"True":"False"}
        </div>
      ))
    }
    </div>
  );
};

export default Todos;
