import { configureStore } from "@reduxjs/toolkit";
import cartValueReducer, { incrementCartValue } from "./cartValueReducer";
import cardRenderDataReduce, { setCard } from "./cardRenderDataReduce";

export const store = configureStore({
  reducer: {
    cartValueReducer: cartValueReducer,
    cardRenderDataReduce: cardRenderDataReduce,
  },
  devTools: true,
});

store.subscribe(() => {
  localStorage.setItem(
    "cartValue",
    JSON.stringify(store.getState().cartValueReducer)
  );
});

store.subscribe(() => {
  localStorage.setItem(
    "cardRenderData",
    JSON.stringify(store.getState().cardRenderDataReduce)
  );
});

const savedCartValue = JSON.parse(localStorage.getItem("cartValue"));
if (savedCartValue !== null) {
  store.dispatch(incrementCartValue(savedCartValue));
}

const savedCardRenderData = JSON.parse(localStorage.getItem("cardRenderData"));
if (savedCardRenderData !== null) {
  store.dispatch(setCard(savedCardRenderData));
}

export default store;
