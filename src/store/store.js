import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    temp(state = { c: 1 }) {
      return state;
    },
  },
});
