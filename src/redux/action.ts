import type { Todo } from "./reducer";

export const addTodoAction = (data: Todo) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
