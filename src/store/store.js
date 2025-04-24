import { configureStore } from "@reduxjs/toolkit";

import {userReducer} from './user.slice'

export const store = configureStore({
  reducer: {
    temp(state = { c: 1 }) {
      return state;
    },

    userReducer,
  },
});
