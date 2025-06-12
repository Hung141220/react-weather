import React, { useEffect, useState } from "react";
import styles from "./PasswordPrompt.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import funnySlice from "../funny/funnySlice";

const NUMPAD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["←", 0, "C"],
];

const PasswordPrompt: React.FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const handleNumpadClick = (val: string | number) => {
    if (val === "←") setPassword(password.slice(0, -1));
    else if (val === "C") setPassword("");
    else setPassword(password + val);
  };
  const { error } = useSelector<
    { funny: { isAuthenticated: boolean; error: string } },
    { isAuthenticated: boolean; error: string }
  >((state) => state.funny);

  const handleCheckAuthenticate = () => {
    if (password.trim() === "") {
      messageApi.error("Vui lòng nhập");
      // if (passInput?.current) {
      //   passInput.current.focus();
      // }
      return;
    }
    dispatch(funnySlice.actions.handleAuthenticated(password));
  };
  useEffect(() => {
    if (error.trim() !== "") {
      messageApi.error(error);
    }
  }, [error]);
  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };
  return (
    <>
      {contextHolder}
      <div className={clsx(styles.wrapper)}>
        <form action="#">
          <h1 className={clsx(styles.title)}>Login</h1>
          <div className={clsx(styles.inputGroup)}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              onPaste={() => false}
              readOnly
              value={password}
            />
            <i
              className={clsx({ [styles.showPassword]: showPass })}
              onClick={handleShowPass}
            >
              👀
            </i>
          </div>

          <div className={clsx(styles.numpad)}>
            {NUMPAD.map((row, i) => (
              <div key={i} className={clsx(styles.numpadRow)}>
                {row.map((num) => (
                  <button
                    key={num}
                    className={clsx(styles.numpadKey)}
                    onClick={() => handleNumpadClick(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <button
            className={clsx(styles.btnCheck)}
            type="button"
            onClick={handleCheckAuthenticate}
          >
            Check
          </button>
        </form>
      </div>
    </>
  );
};

export default PasswordPrompt;
