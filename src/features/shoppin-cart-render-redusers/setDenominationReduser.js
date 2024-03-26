import { createSlice } from "@reduxjs/toolkit";

const initialState = 65156160;

const setDenominationReduser = createSlice({
  name: "setDenominationReduser",
  initialState,
  reducers: {
    setDenomination(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setDenomination } = setDenominationReduser.actions;

export default setDenominationReduser.reducer;
