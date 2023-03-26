import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllCart = createAsyncThunk(
  "product/getCart",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.get(
        "https://621d070d806a09850a500b05.mockapi.io/api/cart"
      );

      if (status === 200) {
        console.log(data,"dat");
        
        return data;
      }
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

export { getAllCart };
