import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./features/product.slice";

const myStore = configureStore({
  reducer: {
    productReducer,
  },
});
export default myStore;

type AppStore = typeof myStore;
export type rooteState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
