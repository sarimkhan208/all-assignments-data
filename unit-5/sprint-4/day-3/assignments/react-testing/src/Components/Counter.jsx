import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    const handleAdd = () =>{
        setCount(prev=>prev+5)
    }

    const handleReduce = () =>{
        setCount(prev=>prev-5)
    }

  return (
    <div>
      <h2 data-testid='counter' >Counter:{count}</h2>
      <button data-testid='add-btn' onClick={handleAdd} >Add</button>
      <button data-testid='reduce-btn' onClick={handleReduce} >Reduce</button>
    </div>
  )
}

export default Counter
