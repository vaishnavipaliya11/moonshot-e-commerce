import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (id: string | undefined) => {
    
    try {
      const { status, data } = await axios.get(
        `https://621d070d806a09850a500b05.mockapi.io/api/products/${id}`
      );

      if (status === 200) {
        return data;
      }
    } catch (err: any) {
      console.log(err);
      
    }
  }
);

export { getSingleProduct };
