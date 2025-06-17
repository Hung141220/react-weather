import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import todoSlice from "../../../redux/slices/todoSlice";

const priorityColorMapping: { [key: string]: string } = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({
  name,
  prioriry,
  completed,
  id,
}: {
  name: string;
  prioriry: string;
  completed: boolean;
  id: string;
}) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    console.log(id);
    
    dispatch(todoSlice.actions.toggleTodoStatus(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
