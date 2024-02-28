import { configureStore } from "@reduxjs/toolkit";
import cartValueReducer, { incrementCartValue } from "./cartValueReducer";
export const store = configureStore({
  reducer: {
    cartValueReducer: cartValueReducer,
  },
  devTools: true,
});

store.subscribe(() => {
  localStorage.setItem(
    "cartValue",
    JSON.stringify(store.getState().cartValueReducer)
  );
});

const savedCartValue = JSON.parse(localStorage.getItem("cartValue"));
if (savedCartValue !== null) {
  store.dispatch(incrementCartValue(savedCartValue));
}

export default store;
