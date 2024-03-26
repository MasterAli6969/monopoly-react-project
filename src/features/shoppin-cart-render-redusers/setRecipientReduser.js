import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const setRecipientReduser = createSlice({
  name: "setRecipientReduser",
  initialState,
  reducers: {
    setRecipient(state, action) {
      state = action.payload;
    },
  },
});

export const { setRecipient } = setRecipientReduser.actions;

export default setRecipientReduser.reducer;
