import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: true, error: "" };
const funnySlice = createSlice({
  name: "funny",
  initialState,
  reducers: {
    handleAuthenticated: (state, action: { type: string; payload: string }) => {
      if (action.payload === "08032025") {
        state.isAuthenticated = true;
        state.error = "";
      } else {
        state.error = "Mật khẩu không chính xác :(";
      }
    },
  },
});
export default funnySlice;
