import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },

    editTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodo, deleteTodo, completeTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
