import { createBrowserRouter } from "react-router-dom";
import Weather from "@/components/weather/Weather";
import DarlingPage from "@/components/darling/DarlingPage";
import TodolistPage from "@/pages/TodolistPage";
import InfomationPage from "@/components/InfomationPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <InfomationPage />,
  },
  {
    path: "weather",
    element: <Weather />,
  },
  {
    path: "darling",
    element: <DarlingPage />,
  },
  {
    path: "todolist",
    element: <TodolistPage />,
  },

  //   {
  //     // path: '/',
  //     // element: <Layout />,
  //     // errorElement: <NotFoundPage />, // Component sẽ hiển thị nếu có lỗi xảy ra trong route này hoặc các route con của nó
  //     // children: [
  //     //   {
  //     //     index: true, // Đây là route mặc định cho path cha ('/')
  //     //     element: <HomePage />,
  //     //   },
  //     //   {
  //     //     path: 'about', // Path tương đối với path cha ('/') => /about
  //     //     element: <AboutPage />,
  //     //   },
  //     //   {
  //     //     path: 'contact', // Path tương đối với path cha ('/') => /contact
  //     //     element: <ContactPage />,
  //     //   },
  //     //   // Thêm các route con khác vào đây
  //     //   // Ví dụ:
  //     //   // {
  //     //   //   path: 'products',
  //     //   //   element: <ProductsPage />,
  //     //   // },
  //     //   // {
  //     //   //   path: 'products/:id', // Route động
  //     //   //   element: <ProductDetailPage />,
  //     //   // },
  //     // ],
  //   },
  // Các route cấp cao khác không cần Layout chung có thể được định nghĩa ở đây
  // {
  //   path: '/login',
  //   element: <LoginPage />,
  // },
  //   {
  //     path: '*', // Ký tự đại diện cho bất kỳ đường dẫn nào không khớp với các route trên
  //     element: <NotFoundPage />, // Component hiển thị trang 404 Not Found
  //   },
]);
