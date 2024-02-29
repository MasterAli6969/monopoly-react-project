import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cardRenderData = createSlice({
  name: "cardRenderDataReduce",
  initialState,
  reducers: {
    setCard(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCard } = cardRenderData.actions;

export default cardRenderData.reducer;
