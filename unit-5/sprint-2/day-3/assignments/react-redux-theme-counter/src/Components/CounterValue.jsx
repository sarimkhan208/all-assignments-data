import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {

  const count = useSelector((state)=>state.counter.counter)


  return <div data-testid="counterValue"><h1>{count}</h1></div>;
};

export default CounterValue;
