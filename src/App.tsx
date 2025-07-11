import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import MessageProvider from "./contexts/messageContext/MessageProvider";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MessageProvider>
          <RouterProvider router={router} />
        </MessageProvider>
      </Provider>
    </>
  );
}
