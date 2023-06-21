import { useState } from "react"

export default function TodoInput({addTodo}){
    const [input , setInput] = useState("")

    const handleAdd = ()=>{
        addTodo(input)
        setInput("")
    }

    return <div  >
        <input data-testid = "todo-input" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button data-testid ="add-button" onClick={handleAdd} >Add Todo</button>
    </div>
}