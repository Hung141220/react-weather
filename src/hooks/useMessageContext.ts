import { MessageContext } from "@/contexts/messageContext";
import { useContext } from "react";

export const useMessageApi = () => {
  const context = useContext(MessageContext);
  if (!context)
    throw new Error("useMessageApi must be used within MessageProvider");
  return context;
};
