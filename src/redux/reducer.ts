import filterSlice from "@/components/todolists/Filter/filterSlice";
import todoSlice from "@/components/todolists/ListTodo/todoSlice";

export type Priority = "Low" | "Medium" | "High";
export interface Todo {
  id: string;
  name: string;
  completed: boolean;
  priority: Priority;
}

export interface Filters {
  search: string;
  status: "All" | "Completed" | "Incomplete";
  priority: Priority[];
}

export interface AppState {
  filters: Filters;
  todoList: Todo[];
}
export interface Action {
  type: string;
  payload: Todo;
}

/* Dữ liệu ở state */
export const initState: AppState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: "1", name: "Đi chơi", completed: false, priority: "Medium" },
  ],
};

/* Xử lý nhận action(dc đẩy bởi dispatch) */
export default function routeReducer(
  state = initState,
  action: Action
): AppState {
  return {
    filters: filterSlice(state.filters, action),
    todoList: todoSlice(state.todoList, action),
  };
}
