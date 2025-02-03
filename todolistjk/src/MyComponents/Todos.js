// we can add style as well and give it as an props, interesting concept.

import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0
        ? "You Didn't Add Any To Do List..."
        : props.todos.map((todo) => {
            console.log(todo.sno);
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
