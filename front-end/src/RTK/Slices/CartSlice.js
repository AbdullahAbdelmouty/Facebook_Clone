import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk('cartSlice/fetchCart',async()=>{
    const res = await fetch('http://localhost:5000/api/v1/products');
    const data = res.json();
    return data;
});

const cartSlice = createSlice({
    initialState:[],
    name:'cartSlice',
    reducers:{
        addToCart:(state,action)=>{
            return state.push(action.payload)
        },
        deleteToCart:(state,action)=>{
            return state.filter(product=>product._id !== action.payload._id)
        },
        clearCart: (state,action)=>{}
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})

export const{addToCart,deleteToCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;