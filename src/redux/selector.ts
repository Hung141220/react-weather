import type { AppState } from "./reducer";

/* Dùng để lấy dữ liệu ở state */
export const todoListSelector = (state: AppState) => state.todoList;
