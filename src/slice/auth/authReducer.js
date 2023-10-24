import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  error: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, action) => {
      if (
        action.payload.email === "testuser@gmail.com" &&
        action.payload.password === "testpassword123"
      ) {
        state.user = true;
      } else {
        state.error = "Invalid user!";
      }
    },

    logoutSuccess: (state) => {
      state.user = false;
      state.error = null;
    },
  },
});

export const { getUser, logoutSuccess } = authReducer.actions;
export default authReducer.reducer;
