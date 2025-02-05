import { productState } from "../../types/product.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: productState = {
  data: null,
  productDetails: null,
};
export const getProducts = createAsyncThunk(
  "products/displayProducts",
  async () => {
    const options = {
      url: "https://fakestoreapi.com/products",
      method: "GET",
    };

    const { data } = await axios.request(options);
    return data;
  }
);
export const getDetails = createAsyncThunk(
  "products/productDetails",
  async (id: string) => {
    const options = {
      url: `https://fakestoreapi.com/products/${id}`,
      method: "GET",
    };

    const { data } = await axios.request(options);
    return data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      console.log({ state, action });
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      console.log({ state, action });
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      console.log({ state, action });
    });
  },
});
export const productReducer = productSlice.reducer;
