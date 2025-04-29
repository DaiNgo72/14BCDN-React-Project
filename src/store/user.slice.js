import { createSlice } from "@reduxjs/toolkit";

export const USER_FETCH_STATUS = {
  IDLE: "IDLE",
  // Skeleton
  FETCHING: "FETCHING",
  // Profile
  SUCCESS: "SUCCESS",
  // login | register
  EXPIRED: "EXPIRED",
};

const userSlice = createSlice({
  name: "userSlice",

  initialState: {
    user: null,
    userFetchStatus: USER_FETCH_STATUS.IDLE,
  },

  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    resetUser(state) {
      state.user = null;
    },

    setUserFetchStatus(state, action) {
      state.userFetchStatus = action.payload
    }
  },
});

export const userReducer = userSlice.reducer;

// lấy những reducers ra bằng .actions
export const { setUser, setUserFetchStatus } = userSlice.actions;
