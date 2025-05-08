import { createSlice } from "@reduxjs/toolkit";
import { manageLocalStorage } from "../common/utils";

const productSlice = createSlice({
  name: "product",
  initialState: {
    carts: [
      /**
       * {
       *  id: 1,
       *  quantity: 1,
       * }
       */
    ],
  },

  reducers: {
    /**
     * payload:
     * {
     *  id: 1,
     *  quantity: 1,
     * }
     */
    addToCart(state, action) {
      const newCarts = [...state.carts, action.payload];

      // Lưu vào redux
      state.carts = newCarts;

      // Lưu vào localStorage
      manageLocalStorage.set("carts", newCarts);
    },
  },
});

// store mini
export const productReducer = productSlice.reducer;
// export const addToCart = productSlice.actions.addToCart;

export const { addToCart } = productSlice.actions;
