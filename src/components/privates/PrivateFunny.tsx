// components/PrivateRoute.jsx
import PasswordPrompt from "./PasswordPrompt";
import { useSelector } from "react-redux";

const PrivateFunny = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.funny);

  // const handleAuthentication = (success: boolean) => {
  //   // setIsAuthenticated(success);
  // };

  if (isAuthenticated) {
    return children; // Nếu đã xác thực, hiển thị nội dung FunnyPage
  } else {
    return (
      <>
        <PasswordPrompt />
      </>
    );
  }
};

export default PrivateFunny;
