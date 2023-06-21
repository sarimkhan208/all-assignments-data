import React, { useEffect, useState } from "react";
function App() {
  const [count,setCount] = useState(()=>{
    const storeVal = localStorage.getItem("counter")
    return storeVal !== null ? parseInt(storeVal):0
  })
  


  const handleClickOne = (val:number)=>{
    setCount((prev)=>prev+val)
  }
  useEffect(()=>{
    localStorage.setItem('counter',count.toString())
  },[count])
  return (
    <div className="App">
      <h1 data-testid="counter">{count}</h1>
      <button data-testid="increment" onClick={()=>handleClickOne(1)} >Increment</button>
      <button data-testid="decrement" onClick={()=>handleClickOne(-1)}>Decrement</button>
      <button data-testid="increment5" onClick={()=>handleClickOne(5)}>Increment5</button>
      <button data-testid="decrement5" onClick={()=>handleClickOne(-5)}>Decrement5</button>
    </div>
  );
}

export default App;
