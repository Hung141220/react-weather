import funnySlice from '@/redux/slices/funnySlice';
import filterSlice from '@/redux/slices/filterSlice';
import todoSlice from '@/redux/slices/todoSlice';
import authReducer from '@/redux/slices/authSlice';
import darlingReducer from '@/redux/slices/darlingSlice';
import infoLove from '@/redux/slices/infoLoveSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoSlice.reducer,
    funny: funnySlice.reducer,
    infoLove: infoLove.reducer,
    auth: authReducer,
    darling: darlingReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
