import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../redux/popup/reducer";
import { editTodo, setCurrentTodo } from "../../redux/todo/reducer";
import "../popup/popup.css";

export const Popup = ({
  show,
  onChange,
  setCurTodo,
  value,
  textPopup,
  curId,
}) => {
  const dispatch = useDispatch();
  const editTodoItem = useSelector((state) => state.todo.todos);

  // const inputRef = React.useRef();

  // console.log("inputRef-----", inputRef);

  const handleClosePopup = () => {
    dispatch(closePopup(false));
    // setCurTodo(value);
    console.log("curTodo---popup", value);
  };

  const sendEditTodo = () => {
    console.log("taskTextPopup", textPopup);

    dispatch(closePopup(false));

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
        <input
          type="text"
          onChange={onChange}
          defaultValue={value}
          // ref={inputRef}
        />
        <i onClick={handleClosePopup} className="material-icons popup-close">
          close
        </i>
        <button
          onClick={handleClosePopup}
          style={{ marginRight: "5px", marginBottom: "20px" }}
        >
          CANCEL
        </button>
        <button onClick={sendEditTodo}>SEND</button>
      </div>
    </div>
  );
};
