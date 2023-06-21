import { useState } from "react";

function App() {

  const [count , setCount] = useState(0)
  const [prime , setPrime] = useState("")

  const incBtn = ()=>{
    setCount(count+1)
    let primeCount=0

    if(count==0 || count==1){
      for(let i=1; i<=count; i++){
        if(count%i==0){
          primeCount++
        }
      }
      if(primeCount==2){
        setPrime("true")
      }
      else{
        setPrime("false")
      }

    }
    else{
      setPrime("false")
    }
  }

  const decBtn = ()=>{
    setCount(count-1)
    let primeCount=0
    if(count==0 || count==1){
      for(let i=1; i<=count; i++){
        if(count%i==0){
          primeCount++
        }
      }
      if(primeCount==2){
        setPrime("true")
      }
      else{
        setPrime("false")
      }

    }
    else{
      setPrime("false")
    }
  }

  const resetBtn = ()=>{
    setCount(0)
  }

  
  
  return (
    <div>
      <div>
        <button data-testid="minusonebtn" onClick={decBtn} disabled={count==0?true:false} >-1</button>
        <button data-testid="plusonebtn" onClick={incBtn} >+1</button>
      <div>
        <button data-testid="resetbtn" onClick={resetBtn} >Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">Count:{count}</span>
      <div>
        <span data-testid="odd-or-even">The Number is : {count%2==0?"Even":"Odd"}</span>
        <span data-testid="is-prime">{prime}</span>
      </div>
    </div>
  );

}

export default App;

