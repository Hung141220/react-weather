import type { AppState } from "./reducer";

export const todoListSelector = (state: AppState) => state.todoList;
