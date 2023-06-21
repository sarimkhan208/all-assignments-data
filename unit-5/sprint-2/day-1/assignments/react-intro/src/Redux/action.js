//DO NOT change the function names
//function to return the add action object

import { ADD , REDUCE } from "./actionTypes";

const handleAddActionObj = () => {
    return {type:ADD,payload:2}
};

//function to return the reduce action object
const handleReduceActionObj = () => {
    return {type:REDUCE,payload:3}
};

export { handleAddActionObj, handleReduceActionObj };
