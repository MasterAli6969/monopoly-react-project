import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const setCountIncremReduser = createSlice({
  name: "setCountIncremReduser",
  initialState,
  reducers: {
    setCountIncrem(state) {
      state.count += 1;
    },
  },
});

export const { setCountIncrem } = setCountIncremReduser.actions;

export default setCountIncremReduser.reducer;
