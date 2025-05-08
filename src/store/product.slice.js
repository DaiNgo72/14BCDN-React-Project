import { createSlice } from "@reduxjs/toolkit";
import { manageLocalStorage } from "../common/utils";

const cartsLocalStorage = manageLocalStorage.get("carts") || [];

const productSlice = createSlice({
  name: "product",
  initialState: {
    carts: [
      ...cartsLocalStorage,
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
      const productIndex = state.carts.findIndex((item) => {
        return item.id === action.payload.id;
      });

      let newCarts = [...state.carts];

      if (productIndex !== -1) {
        // Nếu sản phẩm đã có trong giỏ hàng
        // Cập số lượng mới nhất
        newCarts[productIndex] = action.payload;
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng
        // Thêm sản phẩm vào giỏ hàng
        newCarts.push(action.payload);
      }

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
