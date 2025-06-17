import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase";
import { clearUser, setUser } from "@/redux/slices/authSlice";
import { Spin } from "antd";

const PrivateFunny = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.auth);

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
        <Spin tip="Loading" size="large">
          {/* {content} */}
        </Spin>
      </div>
    );
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateFunny;
