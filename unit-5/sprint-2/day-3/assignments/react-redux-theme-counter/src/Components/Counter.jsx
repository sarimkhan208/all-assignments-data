import React from "react";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
import './counter.css'
import { useSelector } from "react-redux";

const Counter = () => {

  const theme = useSelector((state)=>state.theme.theme)
  // console.log(theme)

  return (
    // the following div classname should be chnaged accrding to the theme
    <div data-testid="counter" className={theme=="light"?"light_theme":"dark_theme"} >
      <h1>Counter</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue/>
      <CounterButtons/>
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
