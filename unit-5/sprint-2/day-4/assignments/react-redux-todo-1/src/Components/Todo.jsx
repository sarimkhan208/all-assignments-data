import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useDispatch ,useSelector} from "react-redux/es/exports";
import { getData } from "../Redux/action";

// just write the fetch/get the todos logic when the component mounts, in this component
const Todo = () => {

  const dispatch = useDispatch()
  const todos = useSelector((key)=>key.todos)

  useEffect(()=>{
    dispatch(getData)
  },[])


  return (
    <div>
      <h1>Todos</h1>
      {/* Import TodoInput component here */}
      <TodoInput/>

      {/* Import TodoList component here */}
      <TodoList />
    </div>
  );
};

export default Todo;
