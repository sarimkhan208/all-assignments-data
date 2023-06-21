import React, { useEffect, useState } from "react";
import Add from "./Add";
import Todo from "./Todo";
function Todos() {
  // const myTodo = 2 || JSON.parse(localStorage.getItem("todos"))
  const [update,setUpdate] = useState<boolean>(false)


  const addUpdate = ()=>{
    setUpdate((prev)=>!prev)
  }
  const [todos,setTodos] = useState(()=>{
    const LSval = localStorage.getItem("todos")
    if(LSval){
      return JSON.parse(LSval)
    }else{
      return []
    }
  })
  console.log("myTodos",todos)
  
  


  return <div>
    <Add update={addUpdate} />
    {
      todos?.map((el:{id:number,desc:string,title:string})=>(
        <Todo key={el.id} {...el}  />
      ))
    }

    </div>;
}

export default Todos;
