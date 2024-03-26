import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const setCountToDefaultReduser = createSlice({
  name: "setCountToDefaultReduser",
  initialState,
  reducers: {
    setCountToDefault(state) {
      state = 1;
      return state;
    },
  },
});

export const { setCountToDefault } = setCountToDefaultReduser.actions;

export default setCountToDefaultReduser.reducer;
