import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const cartValue = createSlice({
  name: "cartValueReducer",
  initialState,
  reducers: {
    incrementCartValue(state) {
      return state + 1;
    },
  },
});
export const { incrementCartValue } = cartValue.actions;
export default cartValue.reducer;
