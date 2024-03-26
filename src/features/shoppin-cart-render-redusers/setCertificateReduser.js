import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const setCertificateReduser = createSlice({
  name: "setCertificateReduser",
  initialState,
  reducers: {
    setCertificate(state, action) {
      state = action.payload;
    },
  },
});

export const { setCertificate } = setCertificateReduser.actions;

export default setCertificateReduser.reducer;
