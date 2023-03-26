import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./Helpers/addToCart";
import { getAllCart } from "./Helpers/getAllCart";
import { getAllProducts } from "./Helpers/getAllProduct";
import { getSingleProduct } from "./Helpers/getSingleProduct";

export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

export interface Products {
  loading: boolean;
  allproducts: Product[];
  singleProduct: Product;
  searchStr: string;
  cartProduct: Product[];
  allCart: Product[];
}

const initialState: Products = {
  allproducts: [],
  loading: false,
  singleProduct: {
    id: 0,
    title: "",
    price: "",

    description: "",
    image: "",
  },
  searchStr: "",
  cartProduct: [],
  allCart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    UpdateSearch: (state, action) => {
      state.searchStr = action.payload;
    },
    UpdateCart: (state, action) => {
      state.allCart = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.allproducts = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
    });
    builder.addCase(getSingleProduct.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cartProduct = action.payload;
      state.allCart= [...state.allCart, action.payload]
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getAllCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCart.fulfilled, (state, action) => {
      state.allCart = action.payload;
    });
    builder.addCase(getAllCart.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { UpdateSearch, UpdateCart } = productSlice.actions;
export default productSlice.reducer;
