import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "../components/alert/Alert";
import { Popup } from "../components/popup/Popup";
import { TodoInput } from "../components/todo-input/TodoInput";
import { TodoList } from "../components/todo-list/TodoList";
import { setAlert } from "../redux/alert/reducer";
import { closePopup, openPopup } from "../redux/popup/reducer";

import { editTodo, setTodo } from "../redux/todo/reducer";
import "./todo.css";

export const Todo = () => {
  const [taskText, setTaskText] = useState("");
  const [taskTextPopup, setTaskTextPopup] = useState("");
  const [curTodo, setCurTodo] = useState("");
  const [curId, setCurId] = useState();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todo.todos);
  const popup = useSelector((state) => state.popup.popup);
  const alerts = useSelector((state) => state.alert.alerts);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleInputChangePopup = (e) => {
    setTaskTextPopup(e.target.value);
  };

  const addTask = () => {
    const todoItem = {
      text: taskText,
      id: Date.now(),
      isCompleted: false,
    };
    if (taskText.length > 0) {
      dispatch(setTodo(todoItem));
      // dispatch(setTodo({ text: taskText, id: Date.now(), isCompleted: true }));
      setShowAlert(true);
      dispatch(
        setAlert({
          message: "Task added! 🤗",
          type: "success",
        })
      );
    } else {
      setShowAlert(true);
      console.log("alerts---", alerts);
      dispatch(
        setAlert({
          message: "Add new task! 😩",
          type: "error",
        })
      );
    }
    setTaskText("");
  };

  console.log("curTodo---TODO", curTodo);

  return (
    <div className="todo">
      <Alert show={showAlert} alerts={alerts} setShowAlert={setShowAlert} />
      <TodoInput onChange={handleInputChange} value={taskText} />
      <TodoList
        todo={items}
        curTodo={curTodo}
        setCurTodo={setCurTodo}
        // completeTask={completeTask}
        setCurId={setCurId}
        // handleShowPopup={handleShowPopup}
      />
      <Popup
        show={popup}
        onChange={handleInputChangePopup}
        // value={taskTextPopup}
        value={curTodo}
        setCurTodo={setCurTodo}
        // setTaskTextPopup={setTaskTextPopup}
        textPopup={taskTextPopup}
        curId={curId}
      />
      <button onClick={addTask}>ADD TASK</button>
    </div>
  );
};
