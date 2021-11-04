import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openPopup } from "../../redux/popup/reducer";
import { completeTodo, deleteTodo } from "../../redux/todo/reducer";
import "../todo-item/todo-item.css";

export const TodoItem = ({ todo, setCurTodo, taskTextPopup, setCurId }) => {
  const dispatch = useDispatch();

  const handleShowPopup = () => {
    dispatch(openPopup(true));
    setCurTodo(todo.text);
    console.log("todo.text-------TodoItem", todo.text);
    setCurId(todo.id);
  };

  const removeTask = () => {
    dispatch(deleteTodo(todo.id));
  };

  const completeTask = () => {
    dispatch(completeTodo(todo));
  };

  return (
    <div className="todo-item">
      <li>
        <i onClick={completeTask} className="material-icons">
          {todo.isCompleted ? "done" : "panorama_fish_eye"}
        </i>
        {todo.text}
        <div>
          <i
            onClick={handleShowPopup}
            className="material-icons close-item"
            style={{ marginRight: "20px" }}
          >
            edit
          </i>
          <i onClick={removeTask} className="material-icons close-item">
            close
          </i>
        </div>
      </li>
    </div>
  );
};
