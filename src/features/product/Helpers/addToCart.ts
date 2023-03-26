import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../ProductSlice";

const addToCart = createAsyncThunk(
  "product/addToCart",
  async (productData: Product) => {
    try {
      const { status, data } = await axios.post(
        "https://621d070d806a09850a500b05.mockapi.io/api/cart",
        productData
      );

      if (status === 201) {
        return data;
      }
    } catch (err: any) {
      console.log(err);
    }
  }
);

export { addToCart };
