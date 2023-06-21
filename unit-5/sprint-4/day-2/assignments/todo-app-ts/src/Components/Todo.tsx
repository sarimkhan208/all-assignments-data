import React from "react";
import { TodoItems } from "../Constants";
function Todo({title,desc,status,id}:TodoItems) {
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{title}</h2>
      <p data-testid="todo-desc">{desc}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input data-testid="todo-status" type="checkbox" defaultChecked={status==true} />
    </div>
  );
}

export default Todo;
