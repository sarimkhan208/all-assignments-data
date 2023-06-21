import React, { useEffect, useState } from "react";


interface AddTodoInterface {
  title:string,
  desc:string,
  status:boolean,
  id:number,
  update:()=>void
}


const Add = ({}) => {

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [addTodo,setAddTodo] = useState<AddTodoInterface[]>([])


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const myObj : AddTodoInterface =  {
      title,
      desc,
      status:false,
      id:Math.random()

    }
    setAddTodo([...addTodo,myObj])
  }

  useEffect(()=>{
    const LSData = localStorage.getItem("todos")
    if(LSData){
      setAddTodo(JSON.parse(LSData))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(addTodo))
    // console.log(localStorage.getItem("todos"))

  },[addTodo])


  return (
    <form data-testid="form" onSubmit={handleSubmit} >
      <input data-testid="title" value={title} onChange={(e)=>setTitle(e.target.value)} type="text" id="title" />
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
        value={desc}
        onChange={(e)=>setDesc(e.target.value)}
      ></textarea>
      <input type="submit" value="Craete Todo" />
    </form>
  );
};

export default Add;
