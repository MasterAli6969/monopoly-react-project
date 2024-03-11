import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  denomination: 0,
  quantity: 0,
};

const shoppinCartRenderReduser = createSlice({
  name: "shoppinCartRenderReduser",
  initialState,
  reducers: {
    setCartData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCartData } = shoppinCartRenderReduser.actions;

export default shoppinCartRenderReduser.reducer;
