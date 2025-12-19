import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let index=state.cart.findIndex((item)=>item.id === action.payload.id);
            if(index>=0){
                const remove=state.cart.filter((item)=>item.id !== action.payload.id);
                state.cart=remove;
            }else{
                state.cart.push(action.payload)
            }
        },
        increment:(state,action)=>{
            state.cart=state.cart.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item,qty:item.qty+1}
                }else{
                    return item;
                }
            })
        },
        decrement:(state,action)=>{
            let item=state.cart.find((item)=>item.id === action.payload.id);
            if(item && item.qty ===1){
                state.cart=state.cart.filter((item)=>item.id !== action.payload.id)
            }else{
                state.cart=state.cart.map((item)=>{
                    if(item.id === action.payload.id){
                        return {...item,qty:item.qty-1};
                    }else{
                        return item;
                    }
                })
            }
        }
    }
})

export const {addToCart,increment,decrement}=cartSlice.actions;
export default cartSlice.reducer;