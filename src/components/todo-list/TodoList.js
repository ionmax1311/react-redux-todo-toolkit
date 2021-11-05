import React from "react";
import { TodoItem } from "../todo-item/TodoItem";
import "../todo-list/todo-list.css";

// const TODO = [
//   {
//     text: " vue.js",
//     id: 1,
//     comleted: false,
//   },
//   {
//     text: " react.js",
//     id: 2,
//     comleted: false,
//   },
// ];

export const TodoList = ({
  todo,
  curTodo,
  setCurTodo,
  taskTextPopup,
  setCurId,
  handleShowPopup,
}) => {
  return (
    <div className="todo-list">
      <ul>
        {todo.map((item) => (
          <TodoItem
            todo={item}
            key={item.id}
            curTodo={curTodo}
            setCurTodo={setCurTodo}
            taskTextPopup={taskTextPopup}
            setCurId={setCurId}
            handleShowPopup={handleShowPopup}
          />
        ))}
      </ul>
    </div>
  );
};
