import { Spin } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase";
import {
  clearUser,
  selectLoading,
  selectUser,
  setUser,
} from "@/redux/slices/authSlice";

const AuthGuard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      } else {
        dispatch(clearUser());
      }
      setAuthChecked(true); //
    });
    return () => unsubscribe();
  }, []);

  if (!authChecked)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spin tip="Loading" size="large"></Spin>
      </div>
    );
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthGuard;
