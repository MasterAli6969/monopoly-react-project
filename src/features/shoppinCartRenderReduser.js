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
    setCardId(state, action) {
      state.id = action.payload;
    },

    setCertificate(state, action) {
      state.сertificate = action.payload;
    },

    setRecipient(state, action) {
      state.recipient = action.payload;
    },

    setRecipientEmail(state, action) {
      state.recipientEmail = action.payload;
    },

    setDenomination(state, action) {
      state.denomination = action.payload;
    },

    setCountIncrem(state) {
      state.count = state.count + 1;
    },
    setCountDicrem(state) {
      if (state.count > 1) {
        state.count = state.count - 1;
      }
    },

    setTotal(state, action) {
      state.total = action.payload;
    },

    setCartData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setCardId,
  setCertificate,
  setRecipient,
  setRecipientEmail,
  setDenomination,
  setCount,
  setTotal,
  setCartData,
} = shoppinCartRenderReduser.actions;

export default shoppinCartRenderReduser.reducer;
