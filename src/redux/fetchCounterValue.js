import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCounter=createAsyncThunk(
    'product/fetchCounter', 
    async()=>{
        const response=await axios.get("https://fakestoreapi.com/products");
        return response.data;    
    }
)