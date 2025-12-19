import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSingleProduct=createAsyncThunk(
    "product/fetchSingleProduct",
    async(id)=>{
        const response=await  axios.get("https://fakestoreapi.com/products/"+id);
        return response.data;
    }
)