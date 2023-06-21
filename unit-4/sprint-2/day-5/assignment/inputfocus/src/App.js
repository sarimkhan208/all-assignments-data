import logo from './logo.svg';
import './App.css';
import { useRef , useState } from 'react'

function App() {

  const [task,setTask] = useState("")

  const inputRef = useRef(null)

  const addTodo = () =>{
    setTask("")
    inputRef.current.focus()

  }
  
  return (
    <div className="App">
      <h1>Input Focus</h1>
      <input  ref={inputRef} type="text" onChange={(e)=>{setTask(e.target.value)}}  />
      <button onClick={addTodo} >add</button>
    </div>
  );
}

export default App;
