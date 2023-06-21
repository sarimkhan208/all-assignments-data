import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

export const CounterButtons = () => {

  const dispatch = useDispatch()


  const add = ()=>{
    dispatch(handleAdd(1))
  }
  const reduce = ()=>{
    dispatch(handleReduce(1))
  }

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={add} >ADD</button>
      <button data-testid="reduceButton" onClick={reduce} >REDUCE</button>
    </div>
  );
};

export default CounterButtons;
