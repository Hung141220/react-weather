import { Spin } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spin tip="Loading" size="large"></Spin>
      </div>
    );
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthGuard;
