import PasswordPrompt from "./PasswordPrompt";
import { useSelector } from "react-redux";

const PrivateFunny = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useSelector<
    { funny: { isAuthenticated: boolean; error: string } },
    { isAuthenticated: boolean; error: string }
  >((state) => state.funny);

  return isAuthenticated ? children : <PasswordPrompt />;
};

export default PrivateFunny;
