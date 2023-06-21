import { useState } from "react"

function Counter(){
    const [count , setCount] = useState(0)

    const incBtn = ()=>{
        
        setCount(count+1)
    }

    const decBtn = ()=>{
        
        setCount(count-1)
    }

    const doubleBtn = ()=>{
        setCount(count+2)
    }

    return <div>
        <h2 data-testid="counter-header">Counter</h2>
        <h3 data-testid="count">{count}</h3>
        <button data-testid="add-btn" onClick={incBtn}>+</button>
        <button data-testid="subtract-btn" onClick={decBtn}>-</button>
        <button data-testid="double-btn" onClick={doubleBtn}>Double</button>
    </div>
}

export default Counter