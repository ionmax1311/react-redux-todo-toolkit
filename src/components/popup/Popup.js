import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../redux/popup/reducer";
import { editTodo, setCurrentTodo } from "../../redux/todo/reducer";
import "../popup/popup.css";

export const Popup = ({
  show,
  onChange,
  setCurTodo,
  curTodo,
  textPopup,
  curId,
}) => {
  const dispatch = useDispatch();
  const editTodoItem = useSelector((state) => state.todo.todos);
  const handleClosePopup = () => {
    dispatch(closePopup(false));
    setCurTodo(222);
    console.log("curTodo---popup", curTodo);
  };

  const handleEditTodo = () => {
    console.log("taskTextPopup", textPopup);

    dispatch(closePopup(false));
    // const newTodos = editTodoItem.map((task) =>
    //   task.id === curId ? { ...task, text: textPopup } : { ...editTodoItem }
    // );

    const newTodos = editTodoItem.map((task) => {
      if (task.id === curId && textPopup.length > 0) {
        return { ...task, text: textPopup };
      }
      return task;
    });

    dispatch(editTodo(newTodos));
    console.log("editTodoItem-----popup", editTodoItem);
  };

  return (
    <div className={!show ? "popup" : "popup active"}>
      <div className="popup-in">
        <input type="text" onChange={onChange} defaultValue={curTodo} />
        <i onClick={handleClosePopup} className="material-icons popup-close">
          close
        </i>
        <button
          onClick={handleClosePopup}
          style={{ marginRight: "5px", marginBottom: "20px" }}
        >
          CANCEL
        </button>
        <button onClick={handleEditTodo}>SEND</button>
      </div>
    </div>
  );
};
