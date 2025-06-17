import { createBrowserRouter, Navigate } from "react-router-dom";
import Weather from "@/components/weather/Weather";
import DarlingPage from "@/components/darling/DarlingPage";
import TodolistPage from "@/pages/TodolistPage";
import FunnyPage from "@/components/funny/FunnyPage";
import Portfolio from "@/pages/Portfolio/Portfolio";
import InfoLoveLayout from "@/layouts/InfoLoveLayout";
import HomePage from "@/pages/InfoLove/HomePage";
import LoginPage from "@/pages/Auth/LoginPage";
import MainLayout from "@/layouts/MainLayout";
import AuthGuard from "@/components/guards/AuthGuard";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Portfolio />,
        index: true,
        handle: {
          title: "PORTFOLIO",
        },
      },
      {
        path: "weather",
        element: <Weather />,
        handle: {
          title: "Weather",
        },
      },
      {
        path: "todolist",
        element: <TodolistPage />,
        handle: {
          title: "Todolist",
        },
      },
      {
        path: "login",
        element: <LoginPage />,
        handle: {
          title: "Login",
        },
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: "darling",
            element: <DarlingPage />,
            handle: {
              title: "Darling",
            },
          },
          {
            path: "funny",
            element: <FunnyPage />,
            handle: {
              title: "Funny",
            },
          },
          {
            path: "info-love",
            element: <InfoLoveLayout />,
            handle: {
              title: "Info Love",
            },
            children: [
              {
                index: true,
                element: <HomePage />,
                handle: {
                  title: "Info Love Home",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
