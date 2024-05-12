import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
import cartsreducer from "../features/carts/cartsSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    carts: cartsreducer,
  },
});

export default store;
