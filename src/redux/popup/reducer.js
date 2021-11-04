import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    popup: false,
  },
  reducers: {
    openPopup: (state, action) => {
      state.popup = action.payload;
    },
    closePopup: (state, action) => {
      state.popup = action.payload;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
