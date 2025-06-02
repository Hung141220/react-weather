import Filters from "@/components/todolists/Filter";
import TodoList from "@/components/todolists/ListTodo";
import { Divider, Typography } from "antd";

const { Title } = Typography;

function TodolistPage() {
  return (
    <>
      <div
        style={{
          // width: 500,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          boxShadow: "0 0 10px 4px #bfbfbf",
          borderRadius: 5,
          height: "90vh",
        }}
        className="md:w-[500px] sm:w-[300px] "
      >
        <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </>
  );
}

export default TodolistPage;
