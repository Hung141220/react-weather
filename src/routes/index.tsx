import { createBrowserRouter, Navigate } from "react-router-dom";
import Weather from "@/components/weather/Weather";
import DarlingPage from "@/components/darling/DarlingPage";
import TodolistPage from "@/pages/TodolistPage";
import FunnyPage from "@/components/funny/FunnyPage";
import PrivateFunny from "@/components/privates/PrivateFunny";
import Portfolio from "@/pages/Portfolio/Portfolio";
import InfoLoveLayout from "@/layouts/InfoLoveLayout";
import HomePage from "@/pages/InfoLove/HomePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
    index: true,
  },
  {
    path: "weather",
    element: <Weather />,
  },

  {
    path: "todolist",
    element: <TodolistPage />,
  },
  {
    element: <PrivateFunny />,
    children: [
      {
        path: "darling",
        element: <DarlingPage />,
      },
      {
        path: "funny",
        element: <FunnyPage />,
      },
      {
        path: "info-love",
        element: <InfoLoveLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
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
