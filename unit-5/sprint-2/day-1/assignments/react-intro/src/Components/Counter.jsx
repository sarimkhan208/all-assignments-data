import React, { useState } from "react";
import { store } from "../Redux/store";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";

const Counter = () => {

  const {subscribe} = store
  const [state,setState] = useState(0)

  const forceUpdate = ()=>{
    setState((prev)=>prev+1)
  }

  subscribe(()=>{
    forceUpdate()
  })
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue/>
      <CounterButtons/>
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
