import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },
  reducers: {
    setAlert: (state, action) => {
      //   state.alerts = {
      //     message: action.payload.message,
      //     type: action.payload.type,
      //   };
      state.alerts.push({
        message: action.payload.message,
        type: action.payload.type,
      });
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
