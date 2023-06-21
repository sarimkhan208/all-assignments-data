import React from "react";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import { store } from "../Redux/store";


const CounterButtons = () => {


  const {dispatch} = store
  

  const addHandle = ()=>{
    dispatch(handleAddActionObj())
    
  }

  const reduceHandle = ()=>{
    dispatch(handleReduceActionObj())
  }

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={addHandle} >ADD</button>
      <button data-testid="reduceButton" onClick={reduceHandle} >REDUCE</button>
    </div>
  );
};

export default CounterButtons;
