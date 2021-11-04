import React from "react";
import "./todo-input.css";

export const TodoInput = ({ value, onChange }) => {
  return (
    <div className="todo-input">
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Add task"
      />
    </div>
  );
};
