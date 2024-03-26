import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 65156160,
};

const setDenominationReduser = createSlice({
  name: "setDenominationReduser",
  initialState,
  reducers: {
    setDenomination(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setDenomination } = setDenominationReduser.actions;

export default setDenominationReduser.reducer;
