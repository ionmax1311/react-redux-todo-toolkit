import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/reducer";
import popupReducer from "./popup/reducer";
import alertReducer from "./alert/reducer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    popup: popupReducer,
    alert: alertReducer,
  },
});
