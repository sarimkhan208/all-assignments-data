import React, { useEffect, useState } from "react";
import { TodoItems } from "../Constants";
import Add from "./Add";
import Todo from "./Todo";
function Todos() {

  const [update,setUpdate] = useState<boolean>(false)
  const [todos,setTodos] = useState(()=>{
    const LSData = localStorage.getItem('todos')
    if(LSData){
      return JSON.parse(LSData)
    }
    else{
      return []
    }
  })
  console.log(update,"myupdate")

  const addUpdate = ()=>{
    setUpdate((prev)=>!prev)
  }

  useEffect(()=>{
    
    console.log(todos)
  },[update])

  

  return <div>
    <Add update={addUpdate} />
    {/* All Todos Should be shown here  */}
    {
      todos?.map((el:TodoItems)=>(
        <Todo key={el.id} {...el}  />
      ))
    }
    </div>;
}

export default Todos;
