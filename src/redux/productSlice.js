import { createSlice } from "@reduxjs/toolkit";
import { fetchCounter } from "./fetchCounterValue";
import { fetchSingleProduct } from "./fetchSingleProduct";
const initialState={
    product:[],
    singleProductt:{}
}

export const  productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCounter.fulfilled,(state,action)=>{
            state.product=action.payload;
        })
        .addCase(fetchSingleProduct.fulfilled,(state,action)=>{
            state.singleProductt=action.payload;
        });
    }
})

export default productSlice.reducer;