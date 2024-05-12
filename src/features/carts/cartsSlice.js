import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkOut: false,
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (
        !state.selectedItems.find((i) => {
          i.id === action.payload.id;
        })
      ) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.totalPrice = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkOut = false;
      }
    },
    removeItem: (state, action) => {
      const newSelecteditems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItems = newSelecteditems;
      state.totalPrice = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[increaseIndex].quantity++;
      state.totalPrice = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    decrease: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.totalPrice = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    chechOut: (state) => {
      (state.selectedItems = []), (state.totalPrice = 0);
      state.itemsCounter = 0;
      state.checkOut = true;
    },
  },
});

export default cartsSlice.reducer;
export const { addItem, removeItem, increase, decrease, chechOut } =
  cartsSlice.actions;
