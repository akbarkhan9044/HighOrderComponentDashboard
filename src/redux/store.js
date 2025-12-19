import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import postSlice from "./postSlice";

export const store=configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice,
        post:postSlice
    }
})