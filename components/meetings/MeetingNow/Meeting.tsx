"use clint";
import React, { createContext, useEffect, useState } from "react";

// Components
import MeetingContent from "./MeetingContent/MeetingContent";
import MeetingHeader from "./MeetingHeader";
import { SOCKET } from "@/static/links";
import { io } from "socket.io-client";
import { getCookie } from "cookies-next";
import MeetingStore from "@/store/meeting";
import { usePathname } from "next/navigation";

// Context
const MeetingContext = createContext({} as any);
export { MeetingContext };

export default function Meeting(props: { id: string }) {
  console.log(props.id);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showAddParticipants, setShowAddParticipants] = useState(false);
  const { users, updateUsers } = MeetingStore();
  const param = usePathname().split("/").pop();
  useEffect(() => {
    const socket = io(SOCKET, {
      auth: {
        Authorization: "Bearer " + getCookie("AccessToken"),
      },
    });
    socket.emit("joinRoom", {
      room: props.id,
    });

    socket.on("joinedRoom", (data: any) => {
      if (data.room === props.id) {
        updateUsers(data.users); // Update users state with new data
      }
    });

    return () => {
      socket.disconnect();
    };
    // Cleanup function to close WebSocket connection
  }, []);

  return (
    <MeetingContext.Provider
      value={{
        showParticipants,
        setShowParticipants,
        showChat,
        setShowChat,
        showAddParticipants,
        setShowAddParticipants,
      }}
    >
      <div className="bg-white fixed top-0 left-0 w-full h-screen z-[3] overflow-y-auto transition-all">
        <MeetingHeader />
        <MeetingContent />
      </div>
    </MeetingContext.Provider>
  );
}
