import React from "react";
import { store } from "../Redux/store";
import { useState } from "react";

const CounterValue = () => {
  // const counter = 0; //get the counter value from the Redux store
  const {getState } = store
  
  return <div data-testid="counterValue">{getState().counter}</div>;
};

export default CounterValue;
