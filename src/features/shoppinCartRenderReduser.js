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

    setTotal(state) {
      state.total = state.denomination + state.denomination * 0.08;
    },

    setCountIncrem(state) {
      state.count = state.count + 1;
    },

    setTotalIncrem(state) {
      state.total =
        state.total + state.denomination + 0.08 * state.denomination;
    },

    setCountDicrem(state) {
      state.count = state.count - 1;
    },

    setTotalDicrem(state) {
      state.total =
        state.total - state.denomination - 0.08 * state.denomination;
    },

    setCountToDefault(state) {
      state.count = 1;
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
  setCountIncrem,
  setTotalIncrem,
  setCountDicrem,
  setTotalDicrem,
  setTotal,
  setCartData,
  setCountToDefault,
} = shoppinCartRenderReduser.actions;

export default shoppinCartRenderReduser.reducer;
