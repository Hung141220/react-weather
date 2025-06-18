import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/services/firebase';
import { selectLoading, setLoading, setUser } from '@/redux/slices/authSlice';
import { useMessageApi } from '@/hooks/useMessageContext';
import bgImage from '@/assets/bg/star.jpg';
import {
  FacebookFilled,
  GithubFilled,
  GoogleSquareFilled,
  LinkedinFilled,
  LockFilled,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [tabForm, setTabForm] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const messageApi = useMessageApi();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const loading = useSelector(selectLoading);

  const handleRegister = async () => {
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.username,
        form.password,
      );
      messageApi.error('Đăng ký thành công');
      setTabForm(1);
      setForm({
        username: '',
        password: '',
      });
    } catch (error) {
      const err = error as { message?: string };
      console.error('Lỗi đăng nhập:', err.message);
      messageApi.error('Đăng ký thất bại');
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleLogin = async () => {
    dispatch(setLoading(true));
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        form.username,
        form.password,
      );
      dispatch(setUser({ uid: user.uid, email: user.email }));
      navigate('/darling', { replace: true });
    } catch (error) {
      const err = error as { message?: string };
      console.error('Lỗi đăng nhập:', err.message);
      messageApi.error('Đăng nhập thất bại');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="bg-url flex min-h-screen items-center justify-center px-2.5"
      >
        <div className="relative h-[550px] w-3xl overflow-hidden rounded-4xl bg-white shadow-[0_0_30px_rgpa(0,0,0,.2)] backdrop-blur-md max-[650px]:h-[calc(100vh-20px)]">
          {/* login */}
          <div
            className={`absolute right-0 z-10 flex h-full w-1/2 items-center bg-white p-10 text-center text-gray-400 transition-all delay-500 ease-in-out select-none max-[650px]:right-0 max-[650px]:h-[70%] max-[650px]:w-full ${tabForm === 1 && 'right-0 max-[650px]:bottom-0'} ${tabForm === 2 && 'right-1/2 max-[650px]:-bottom-[40%]'}`}
          >
            {/* Form */}
            <form action="#" className="w-full">
              <h1 className="-my-2.5 text-4xl font-semibold">Login</h1>
              {/* input-group */}
              <div className="relative my-7">
                <input
                  className="w-full cursor-auto rounded-xl border border-transparent bg-gray-100 py-3 pr-12 pl-3 font-medium text-gray-600 transition-all duration-300 placeholder:font-light focus:outline-2 focus:outline-blue-500"
                  type="email"
                  placeholder="Nhập tên người dùng"
                  value={form.username}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      username: e.target.value,
                    })
                  }
                />
                <UserOutlined className="absolute top-1/2 right-5 -translate-y-1/2 text-xl text-gray-400" />
              </div>
              <div className="relative my-7">
                <input
                  className="w-full cursor-auto rounded-xl border border-transparent bg-gray-100 py-3 pr-12 pl-3 font-medium text-gray-600 transition-all duration-300 placeholder:font-light focus:outline-2 focus:outline-blue-500"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                />
                <LockFilled className="absolute top-1/2 right-5 -translate-y-1/2 text-xl text-gray-400" />
              </div>
              <div className="m-[-15px_0_15px] transition duration-300 hover:-translate-y-0.5">
                <a href="#" className="text-sm">
                  Forgot password?
                </a>
              </div>
              <Button
                type="primary"
                size="large"
                onClick={handleLogin}
                loading={loading}
                className="ease mt-4 w-full cursor-pointer rounded-2xl border p-2 text-2xl"
              >
                Login
              </Button>
              <p className="my-3.5 text-sm">or login with social platforms</p>
              {/* social */}
              <div>
                <a
                  href="#"
                  className="inline-flex rounded-xl p-2.5 text-2xl hover:text-gray-500"
                >
                  <GoogleSquareFilled />
                </a>
                <a
                  href="#"
                  className="inline-flex rounded-xl p-2.5 text-2xl hover:text-gray-500"
                >
                  <FacebookFilled />
                </a>
                <a
                  href="#"
                  className="inline-flex rounded-xl p-2.5 text-2xl hover:text-gray-500"
                >
                  <GithubFilled />
                </a>
                <a
                  href="#"
                  className="inline-flex rounded-xl p-2.5 text-2xl hover:text-gray-500"
                >
                  <LinkedinFilled />
                </a>
              </div>
            </form>
          </div>

          {/* register */}
          <div
            className={`transtion-all absolute left-0 z-10 flex h-full w-1/2 items-center justify-center bg-white p-10 text-center text-gray-400 duration-300 ease-in-out select-none max-[650px]:right-0 max-[650px]:bottom-[30%] max-[650px]:h-[70%] max-[650px]:w-full ${tabForm === 1 && 'invisible'} ${tabForm === 2 && 'visible'}`}
          >
            {/* Form */}
            <form action="#" className="w-full">
              <h1 className="-my-2.5 text-4xl font-semibold">Register</h1>
              {/* input-group */}
              <div className="relative my-7">
                <input
                  className="w-full cursor-auto rounded-xl border border-transparent bg-gray-100 py-3 pr-12 pl-3 font-medium text-gray-600 transition-all duration-300 placeholder:font-light focus:outline-2 focus:outline-blue-500"
                  type="email"
                  placeholder="email@gmaail.com"
                  value={form.username}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      username: e.target.value,
                    })
                  }
                />
                <UserOutlined className="absolute top-1/2 right-5 -translate-y-1/2 text-xl text-gray-400" />
              </div>
              <div className="relative my-7">
                <input
                  className="w-full cursor-auto rounded-xl border border-transparent bg-gray-100 py-3 pr-12 pl-3 font-medium text-gray-600 transition-all duration-300 placeholder:font-light focus:outline-2 focus:outline-blue-500"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                />
                <LockFilled className="absolute top-1/2 right-5 -translate-y-1/2 text-xl text-gray-400" />
              </div>

              <Button
                type="primary"
                size="large"
                onClick={handleRegister}
                loading={loading}
                className="ease mt-4 w-full cursor-pointer rounded-2xl border p-2 text-2xl"
              >
                Register
              </Button>
              <p className="my-3.5 text-sm">
                or register with social platforms
              </p>
              {/* social */}
              <div>
                <a
                  href="#"
                  className="inline-flex rounded-xl p-2.5 text-2xl hover:text-gray-500"
                >
                  <GoogleSquareFilled />
                </a>
                <a
                  href="#"
                  className="inline-flex rounded-xl p-2.5 text-2xl hover:text-gray-500"
                >
                  <FacebookFilled />
                </a>
                <a
                  href="#"
                  className="inline-flex rounded-xl p-2.5 text-2xl hover:text-gray-500"
                >
                  <GithubFilled />
                </a>
                <a
                  href="#"
                  className="inline-flex rounded-xl p-2.5 text-2xl hover:text-gray-500"
                >
                  <LinkedinFilled />
                </a>
              </div>
            </form>
          </div>

          {/* toggle box */}
          <div
            className={`absolute h-full w-full before:absolute before:inset-0 before:-left-[250%] before:z-20 before:w-[300%] before:rounded-[150px] before:bg-green-900 before:transition-all before:duration-[.7s] before:ease-in-out max-[650px]:before:-top-[270%] max-[650px]:before:left-0 max-[650px]:before:h-[300%] max-[650px]:before:w-full ${tabForm === 2 && 'before:left-1/2 max-[650px]:before:top-[70%] max-[650px]:before:left-0'}`}
          >
            <div
              className={`absolute z-20 flex h-full w-1/2 flex-col items-center justify-center text-white transition-all delay-300 ease-in-out max-[650px]:h-[30%] max-[650px]:w-full ${tabForm === 2 && '-left-1/2 max-[650px]:-top-[30%] max-[650px]:left-0'} ${tabForm === 1 && 'left-0 max-[650px]:top-0'} `}
            >
              <h1 className="mb-5 text-3xl font-semibold">Hello, Welcome!</h1>
              <p className="mb-5">Don't have an account ?</p>
              <Button
                type="default"
                size="large"
                className="h-12 w-40 border-2 border-solid border-gray-100 bg-transparent"
                onClick={() => setTabForm(2)}
              >
                Register
              </Button>
            </div>
            {/*  */}
            <div
              className={`absolute z-20 flex h-full w-1/2 flex-col items-center justify-center text-white transition-all delay-300 ease-in-out max-[650px]:right-0 max-[650px]:h-[30%] max-[650px]:w-full ${tabForm === 1 && '-right-1/2 max-[650px]:-bottom-[30%]'} ${tabForm === 2 && 'right-0 max-[650px]:bottom-0'} `}
            >
              <h1 className="mb-5 text-3xl font-semibold">Welcome Back !</h1>
              <p className="mb-5">Already have an account ?</p>
              <Button
                type="default"
                size="large"
                className="h-12 w-40 border-2 border-solid border-gray-100 bg-transparent"
                onClick={() => setTabForm(1)}
              >
                Login
              </Button>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
