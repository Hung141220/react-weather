import Filters from "@/components/todolists/Filter";
import TodoList from "@/components/todolists/ListTodo";
import { Divider, Typography } from "antd";

const { Title } = Typography;

function TodolistPage() {
  return (
    <>
      <div className="mx-auto mt-4 flex h-[90vh] flex-col rounded-xl bg-white p-4 font-medium shadow-[0_0_8px_4px_#bfbfbf] sm:w-[300px] md:w-[500px]">
        <Title className="text-center">TODO APP with REDUX</Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </>
  );
}

export default TodolistPage;
