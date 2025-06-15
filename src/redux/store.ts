import funnySlice from "@/components/funny/funnySlice";
import filterSlice from "@/components/todolists/Filter/filterSlice";
import todoSlice from "@/components/todolists/ListTodo/todoSlice";
import infoLove from "@/slices/infoLoveSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoSlice.reducer,
    funny: funnySlice.reducer,
    infoLove: infoLove.reducer,
  },
});
export default store;
