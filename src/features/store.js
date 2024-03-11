import { configureStore } from "@reduxjs/toolkit";
import cartValueReducer from "./cartValueReducer";
import cardRenderDataReduce from "./cardRenderDataReduce";
import shoppinCartRenderReduser from "./shoppinCartRenderReduser";
import storage from "redux-persist/lib/storage";
import { persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key:"root",
  storage
}

const rootReducer = combineReducers({
  cartValueReducer: cartValueReducer,
  cardRenderDataReduce: cardRenderDataReduce,
  shoppinCartRenderReduser:shoppinCartRenderReduser
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

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

export const persistor =  persistStore(store)


export default store;
