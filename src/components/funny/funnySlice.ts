import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: true };
const funnySlice = createSlice({
  name: "funny",
  initialState,
  reducers: {},
});
export default funnySlice;
