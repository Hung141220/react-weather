// import { createStore } from "redux";
// import routeReducer from "./reducer";

import filterSlice from "@/components/todolists/Filter/filterSlice";
import todoSlice from "@/components/todolists/ListTodo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(routeReducer);
// export default store;

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoSlice.reducer,
  },
});
export default store;
