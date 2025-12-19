import { createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./fetchPost";

const initialState={
    post:[]
}

export const postSlice=createSlice({
    name:"postSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPost.fulfilled,(state,action)=>{
            state.post=action.payload;
        })
    }
})
export const {}=postSlice.actions;
export default postSlice.reducer;