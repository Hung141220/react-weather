import { Outlet } from "react-router-dom";
import PasswordPrompt from "./PasswordPrompt";
import { useSelector } from "react-redux";

const PrivateFunny = () => {
  const { isAuthenticated } = useSelector<
    { funny: { isAuthenticated: boolean; error: string } },
    { isAuthenticated: boolean; error: string }
  >((state) => state.funny);

  return isAuthenticated ? <Outlet /> : <PasswordPrompt />;
};

export default PrivateFunny;
