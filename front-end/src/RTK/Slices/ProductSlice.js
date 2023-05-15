import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async () => {
  const res = await fetch('http://localhost:5000/api/v1/products');
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: 'productsSlice',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload
    });
  },
});

export default productSlice.reducer;
