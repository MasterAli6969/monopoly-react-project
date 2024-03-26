import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const setCountDicremReduser = createSlice({
  name: "setCountDicremReduser",
  initialState,
  reducers: {
    setCountDicrem(state) {
      state.count -= 1;
    },
  },
});

export const { setCountDicrem } = setCountDicremReduser.actions;

export default setCountDicremReduser.reducer;
