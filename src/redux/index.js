import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/reducer";
import popupReducer from "./popup/reducer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    popup: popupReducer,
  },
});
