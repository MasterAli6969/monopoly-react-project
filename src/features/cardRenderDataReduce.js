import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cardRenderData = createSlice({
  name: "cardRenderDataReduce",
  initialState,
  reducers: {
    setCard(state) {
      state = { id: 1 };
      return state;
    },
  },
});

export const { setCard } = cardRenderData.actions;

export default cardRenderData.reducer;
