import { createContext } from "react";

export const WebSocketContext = createContext<any>({
  socket: null,
  users: [],
});
