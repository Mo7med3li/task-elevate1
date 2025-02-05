import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./features/product.slice";

export const myStore = configureStore({
  reducer: {
    productReducer,
  },
});

type AppStore = typeof myStore;
export type rooteState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
