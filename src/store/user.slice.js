import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",

  initialState: {
    user: null,
  },

  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    resetUser(state) {
      state.user = null;
    },
  },
});

export const userReducer = userSlice.reducer;

// lấy những reducers ra bằng .actions
export const { setUser } = userSlice.actions;
