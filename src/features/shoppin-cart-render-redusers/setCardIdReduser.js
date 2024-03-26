import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const setCardIdReduser = createSlice({
  name: "setCardIdReduser",
  initialState,
  reducers: {
    setCardId(state, action) {
      state = action.payload;
    },
  },
});

export const { setCardId } = setCardIdReduser.actions;

export default setCardIdReduser.reducer;
