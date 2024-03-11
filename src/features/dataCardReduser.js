import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cardData = createSlice({
  name: "dataCardReduser",
  initialState,
  reducers: {
    setCard(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCard } = cardData.actions;

export default cardData.reducer;
