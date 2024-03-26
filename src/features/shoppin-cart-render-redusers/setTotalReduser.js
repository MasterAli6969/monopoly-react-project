import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const setTotalReduser = createSlice({
  name: "setTotalReduser",
  initialState,
  reducers: {
    setTotal(state, action) {
      state = action.payload + action.payload * 0.08;
    },
  },
});

export const { setTotal } = setTotalReduser.actions;

export default setTotalReduser.reducer;
