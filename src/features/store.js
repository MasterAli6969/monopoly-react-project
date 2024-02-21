import { configureStore } from "@reduxjs/toolkit";
import cartValueReducer from "./cartValueReducer";
export const store = configureStore({
  reducer: {
    cartValueReducer: cartValueReducer,
  },
  devTools: true,
});
