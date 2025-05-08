import { configureStore } from "@reduxjs/toolkit";

import {userReducer} from './user.slice'
import {productReducer} from './product.slice'

// store large = mini + mini + mini + mini
export const store = configureStore({
  reducer: {
    userReducer,
    productReducer,
  },
});
