import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost=createAsyncThunk(
    "product/fetchPost",
    async()=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    }
)