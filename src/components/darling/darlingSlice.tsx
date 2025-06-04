import { createSlice } from "@reduxjs/toolkit";

const initState = [
  { id: "1", name: "Đi chơi", completed: false, priority: "Medium" },
];
const darlingSlice = createSlice({
  name: "darling",
  initialState: initState,
  reducers: {},
});

export default darlingSlice;
