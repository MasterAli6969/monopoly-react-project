import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const setRecipientEmailReduser = createSlice({
  name: "setRecipientEmailReduser",
  initialState,
  reducers: {
    setRecipientEmail(state, action) {
      state = action.payload;
    },
  },
});

export const { setRecipientEmail } = setRecipientEmailReduser.actions;

export default setRecipientEmailReduser.reducer;
