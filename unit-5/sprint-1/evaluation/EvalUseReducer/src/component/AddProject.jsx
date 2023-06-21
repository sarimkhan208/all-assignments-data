import React, { useReducer, useState } from "react";
import { ProjectList } from "./ProjectList";

const initialState = {
  name : "",
  tech_stack : "",
  assigned_to: "",
  status: "pending",
};

const reducer = (state,{type,payload}) => {
  switch(type){
    case "NAME":return{
      ...state,"name":payload
    }
    case "TECH_STACK":return{
      ...state,"tech_stack":payload
    }
    case "ASSIGNED_TO":return{
      ...state,"assigned_to":payload
    }
    case "STATUS" : return{
      ...state , "status" : payload
    }
    case  "RESET" : return initialState
    default: {
      return state
    }
  }
};

export const AddProject = () => {
  const [data,setData] = useState([])
  const [state,dispatch] = useReducer(reducer,initialState)
  const handleSubmit = (e)=>{
    dispatch({type : "RESET" })
    e.preventDefault()
    setData([...data,state])
    
  }
  console.log(data)
  return (
    <div>
      <h1>Add Project</h1>
      <div className="form-wrapper" data-testid="form-wrapper">
        <form data-testid="form-element" onSubmit={handleSubmit} >
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Project Name</label>
            <input name="name" onChange={(e)=>dispatch({type:"NAME",payload:e.target.value})} />
          </div>
          <div className="tech-stack-wrapper" data-testid="tech-stack-wrapper">
            <label>Tech Stack</label>
            {/* Provide select tag with name attribute `name="tech_stack"` */}
            {/* This Select Tag will have `data-testid="tech-stack-select` */}
            <select data-testid="tech-stack-select" name="tech_stack" onClick={(e)=>dispatch({type:"TECH_STACK",payload:e.target.value})}>
              <option value='react' >React</option>
              <option value='node'>Node</option>
              <option value='java'>Java</option>
              <option value='python'> Python</option>
            </select>
          </div>
          <div
            className="assigned-to-wrapper"
            data-testid="assigned-to-wrapper"
          >
            <label>Assignmed to</label>
            {/* Provide select tag with name attribute `name="assigned_to"` */}
            {/* This Select Tag will have `data-testid="assigned-to-select` */}
            <select data-testid="assigned-to-select" name="assigned_to" onClick={(e)=>dispatch({type:"ASSIGNED_TO",payload:e.target.value})}>
              <option value='nrupul' >Nrupul</option>
              <option value='albert'>Albert</option>
              <option value='aman'>Aman</option>
            </select>
          </div>
          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status</label>
            {/* Provide checkbox  with name attribute `name="status"` */}
            <input type='checkbox' onClick={(e)=>dispatch({type:"STATUS",payload:e.target.checked?"completed":"pending"})}/>
          </div>
          <input type='submit' />
        </form>
      </div>
      <h1>Project List</h1>
      {/* Show the project list here using `ProjectList` component */}
      {
        data.length==0?<div data-testid="no-project-container">No Project Found</div>:<ProjectList data={data} />
      }
    </div>
  );
};

export { initialState, reducer };
