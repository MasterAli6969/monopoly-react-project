import { configureStore } from "@reduxjs/toolkit";
import cartValueReducer from "./cartValueReducer";
import cardRenderDataReduce from "./cardRenderDataReduce";
import shoppinCartRenderReduser from "./shoppinCartRenderReduser";
// import setCardIdReduser from "./shoppin-cart-render-redusers/setCardIdReduser";
// import setCertificateReduser from "./shoppin-cart-render-redusers/setCertificateReduser";
// import setCountDicremReduser from "./shoppin-cart-render-redusers/setCountDicremReduser";
// import setCountIncremReduser from "./shoppin-cart-render-redusers/setCountIncremReduser";
// import setCountToDefaultReduser from "./shoppin-cart-render-redusers/setCountToDefaultReduser";
// import setDenominationReduser from "./shoppin-cart-render-redusers/setDenominationReduser";
// import setRecipientEmailReduser from "./shoppin-cart-render-redusers/setRecipientEmailReduser";
// import setRecipientReduser from "./shoppin-cart-render-redusers/setRecipientReduser";
// import setTotalDicremReduser from "./shoppin-cart-render-redusers/setTotalDicremReduser";
// import setTotalIncremReduser from "./shoppin-cart-render-redusers/setTotalIncremReduser";
// import setTotalReduser from "./shoppin-cart-render-redusers/setTotalReduser";

import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cartValueReducer: cartValueReducer,
  cardRenderDataReduce: cardRenderDataReduce,
  shoppinCartRenderReduser: shoppinCartRenderReduser,
  // setCardIdReduser: setCardIdReduser,
  // setCertificateReduser: setCertificateReduser,
  // setCountDicremReduser: setCountDicremReduser,
  // setCountIncremReduser: setCountIncremReduser,
  // setCountToDefaultReduser: setCountToDefaultReduser,
  // setDenominationReduser: setDenominationReduser,
  // setRecipientEmailReduser: setRecipientEmailReduser,
  // setRecipientReduser: setRecipientReduser,
  // setTotalDicremReduser: setTotalDicremReduser,
  // setTotalIncremReduser: setTotalIncremReduser,
  // setTotalReduser: setTotalReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export default store;
