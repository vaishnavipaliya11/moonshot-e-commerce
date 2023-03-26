import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProducts = createAsyncThunk(
  "product/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.get(
        "https://621d070d806a09850a500b05.mockapi.io/api/products"
      );

      if (status === 200) {
        return data;
      }
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

export { getAllProducts };
