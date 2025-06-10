import { Button, Input, message } from "antd";
import PasswordPrompt from "./PasswordPrompt";
import { useDispatch, useSelector } from "react-redux";
import funnySlice from "../funny/funnySlice";
import { useEffect, useRef, useState } from "react";

const PrivateFunny = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, error } = useSelector<
    { funny: { isAuthenticated: boolean; error: string } },
    { isAuthenticated: boolean; error: string }
  >((state) => state.funny);
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const passInput = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  const handleCheckAuthenticate = () => {
    if (password.trim() === "") {
      messageApi.error("Vui lòng nhập");
      if (passInput?.current) {
        passInput.current.focus();
      }
      return;
    }
    dispatch(funnySlice.actions.handleAuthenticated(password));
  };
  useEffect(() => {
    if (error.trim() !== "") {
      messageApi.error(error);
    }
  }, [error]);

  if (isAuthenticated) {
    return children; // Nếu đã xác thực, hiển thị nội dung FunnyPage
  } else {
    return (
      <>
        {contextHolder}
        <div
          className="
            max-w-[300px]
            mx-auto mt-20
            text-center
          "
        >
          <label>Mật khẩu</label>
          <Input
            ref={passInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button onClick={handleCheckAuthenticate}>Check</Button>
        </div>
      </>
    );
  }
};

export default PrivateFunny;
