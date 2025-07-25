import type { MessageInstance } from "antd/es/message/interface";
import { createContext } from "react";

const MessageContext = createContext<MessageInstance | null>(null);
export { MessageContext };
