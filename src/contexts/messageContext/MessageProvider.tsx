import { message } from "antd";
import { MessageContext } from "./MessageContext";

const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <MessageContext.Provider value={messageApi}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
