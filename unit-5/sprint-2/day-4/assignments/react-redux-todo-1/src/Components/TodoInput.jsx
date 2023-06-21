
import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getData, postData } from "../Redux/action";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {

  const [task,setTask] = React.useState("")
  const dispatch = useDispatch()

  const handleAdd = ()=>{
    dispatch(postData(task)).then(()=>dispatch(getData))
    setTask("")
  }
  return (
    <div>
      <input data-testid="todo-input"  value={task} onChange={(e)=>setTask(e.target.value)} />
      <button data-testid="todo-add-btn" onClick={handleAdd} >Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
