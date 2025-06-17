import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false, error: "" };
const funnySlice = createSlice({
  name: "funny",
  initialState,
  reducers: {
    handleAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
  },
});
export default funnySlice;
