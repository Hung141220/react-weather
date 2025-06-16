import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import funnySlice from "@/components/funny/funnySlice";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/services/firebase";
import { clearUser, setUser } from "@/slices/authSlice";

const LoginPage: React.FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };
  const handleCheckAuthenticate = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.username,
        form.password,
      );
      console.log("User registered:", userCredential.user);
    } catch (error) {
      console.error({ error });
      messageApi.error(error.message);
    }
  };
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.username,
        form.password,
      );
      const user = userCredential.user;
      // console.log("Đăng nhập thành công:", user);
      dispatch(funnySlice.actions.handleAuthenticated());
    } catch (error) {
      console.error("Lỗi đăng nhập:", error.message);
      messageApi.error(error.message);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="relative h-screen bg-gray-400">
        <form
          action="#"
          className="color-white absolute top-1/2 left-1/2 z-5 w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-transparent p-5 text-center backdrop-blur-2xl"
        >
          <h1 className={clsx("mb-4 text-3xl italic select-none")}>Login</h1>
          <div className={clsx("relative mb-4")}>
            <input
              className="w-full cursor-auto rounded-2xl border border-s-2 border-solid border-amber-100 bg-transparent p-4 text-2xl font-semibold select-none focus:outline-teal-200"
              type="text"
              placeholder="Nhập tên người dùng"
              // readOnly
              value={form.username}
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
            />
          </div>
          <div className={clsx("relative mb-4")}>
            <input
              className="w-full cursor-auto rounded-2xl border border-s-2 border-solid border-amber-100 bg-transparent p-4 text-2xl font-semibold select-none focus:outline-teal-200"
              type={showPass ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              // readOnly
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />
            {/* <i
              className={clsx(
                "absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer",
              )}
              onClick={handleShowPass}
            >
              👀
            </i> */}
          </div>

          <button
            className={clsx(
              "mt-4 cursor-pointer rounded-2xl border p-2 text-2xl",
              "ease transition duration-300 hover:-translate-y-0.5",
            )}
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
