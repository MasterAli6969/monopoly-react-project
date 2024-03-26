import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const setTotalDicremReduser = createSlice({
  name: "setTotalDicremReduser",
  initialState,
  reducers: {
    setTotalDicrem(state) {
      state -= 0.08 * state;
      return state;
    },
  },
});

export const { setTotalDicrem } = setTotalDicremReduser.actions;

export default setTotalDicremReduser.reducer;
