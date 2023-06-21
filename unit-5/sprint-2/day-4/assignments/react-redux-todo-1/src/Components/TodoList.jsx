import React from "react";
import { useSelector } from "react-redux";


// get all the todos from the redux store, and map them inside this component
const TodoList = () => {

  const data = useSelector((state)=>state.todos)

  return (
    <div data-testid='todo-list-wrapper'>

      {/* map all the "individual/single" todo inside this div. */}
      
      {
        data.length>0 && data.map((el)=>(
          <div  key={el.id} data-testid="single-todo" >
            {el.title} - {el.status?"True":"False"}
          </div>
        ))
      }
      


    </div>
  );
};

export default TodoList;
