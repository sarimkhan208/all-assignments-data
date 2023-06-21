import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";

const Todos = () => {

  const [data,setData] = useState([])
  const fetchData = ()=>{
    return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`).then((res)=>setData(res.data))
  }



  useEffect(()=>{
    fetchData()
  },[handleTask])



  function handleAddTodo(obj={}){
    return axios({
      method : "post",
      url : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
      data : obj
    })
  }


  function handleTask(obj){
    handleAddTodo(obj)
    fetchData()
  }
  

  return (
    <div>
    {<TodoInput handleTask={handleTask}/>}
    <div data-testid = "todos-wrapper">
    {data.map((el)=>(
      <p key={el.id} >{el.title}-{el.status?"True":"False"}</p>
    ))}
    </div>
    </div>
  );
};

export default Todos;
