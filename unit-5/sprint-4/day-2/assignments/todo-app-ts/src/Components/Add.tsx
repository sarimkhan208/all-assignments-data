import React, { useEffect, useState } from "react";

interface Addprops{
  update:()=>void
}

const Add = ({update}:Addprops) => {
  const [title,setTitle] = useState<string>("")
  const [desc,setDesc] = useState<string>("")

  const [LStodo,setLSTodo] = useState(()=>{
    const LSdata = localStorage.getItem('todos')
    if(LSdata){
      return JSON.parse(LSdata)
    }
    else{
      return []
    }
  })


  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const obj = {
      title:title,
      desc:desc,
      status:false,
      id:Math.random()
    }
    if(LStodo.length>0){
      setLSTodo([...LStodo,obj])
    }
    else{
      setLSTodo([obj])
    }
    
  }
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(LStodo))
    update()

  },[LStodo])

  return (
    <form data-testid="form" onSubmit={handleSubmit} >
      <input value={title} onChange={(e)=>setTitle(e.target.value)}  data-testid="title" type="text" id="title" />
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
