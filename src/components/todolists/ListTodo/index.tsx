import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "@/redux/action";
import React, { useRef, useState } from "react";
import type { Priority } from "@/redux/reducer";
import { v4 } from "uuid";
import { todoListSelector } from "@/redux/selector";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoNameRef = useRef<HTMLInputElement | null>(null); // andtd chưa biết focus sao
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");

  const todolists = useSelector(todoListSelector);

  const resetTodoName = () => {
    setTodoName("");
    setPriority("Medium");
    if (todoNameRef.current) {
      todoNameRef.current.focus();
    }
  };

  const handleOnChangeTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value: Priority) => {
    setPriority(value);
  };
  const handleOnClick = () => {
    /* Xử lý dispatch vào reducer */
    dispatch(
      addTodoAction({
        id: v4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    resetTodoName();
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todolists.map((todo) => (
          <Todo name={todo.name} prioriry={todo.priority} key={todo.id} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleOnChangeTodoName} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleOnClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
