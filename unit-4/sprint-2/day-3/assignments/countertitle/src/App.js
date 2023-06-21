import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'


function App() {
  const [count ,setCount] = useState(0)
  useEffect(()=>{
    document.title = `Clicked ${count} times`
  })

  
  const handleCLick = ()=>{
    setCount(count+1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{handleCLick()}} >INC</button>
    </div>
  );
}

export default App;
