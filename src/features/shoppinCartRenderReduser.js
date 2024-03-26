import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  сertificate: "",
  recipient: "",
  recipientEmail: "",
  denomination: 0,
  count: 1,
  total: 0,
};

const shoppinCartRenderReduser = createSlice({
  name: "shoppinCartRenderReduser",
  initialState,
  reducers: {
    setInitialState(state, action) {
      return action.payload;
    },
  },
});

export const { setInitialState } = shoppinCartRenderReduser.actions;

export default shoppinCartRenderReduser.reducer;
