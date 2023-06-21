import React from "react";
interface TodoProps{
  id:number,
  title:string,
  desc:string,
  
}
function Todo({id,title,desc}:TodoProps) {
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{title}</h2>
      <p data-testid="todo-desc">{desc}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input data-testid="todo-status" type="checkbox" />
    </div>
  );
}

export default Todo;
