import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id, amount } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemToRemove);
    },

    subItem: (state, action) => {
      const { id, amount } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.amount > 1) {
        existingItem.amount -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateItemAmount: (state, action) => {
      const { id, amount } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.amount = amount;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const ADD_ITEM = "cart/addItem";
export const REMOVE_ITEM = "cart/removeItem";
export const SUB_ITEM = "cart/subItem";
export const UPDATE_AMOUNT = "cart/updateAmount";

export const addItemActionCreator = (payload) => ({ type: ADD_ITEM, payload });
export const removeItemActionCreator = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});
export const subItemActionCreator = (payload) => ({
  type: SUB_ITEM,
  payload,
});
export const updateItemAmountActionCreator = (payload) => ({
  type: UPDATE_AMOUNT,
  payload,
});

export const { addItem, removeItem, subItem, updateItemAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
