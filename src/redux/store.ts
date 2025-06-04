import funnySlice from "@/components/funny/funnySlice";
import filterSlice from "@/components/todolists/Filter/filterSlice";
import todoSlice from "@/components/todolists/ListTodo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoSlice.reducer,
    funny: funnySlice.reducer,
  },
});
export default store;
