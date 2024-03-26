import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const setTotalIncremReduser = createSlice({
  name: "setTotalIncremReduser",
  initialState,
  reducers: {
    setTotalIncrem(state) {
      state += 0.08 * state;
      return state;
    },
  },
});

export const { setTotalIncrem } = setTotalIncremReduser.actions;

export default setTotalIncremReduser.reducer;
