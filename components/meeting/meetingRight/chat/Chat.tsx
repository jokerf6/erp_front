import React, { useContext } from "react";

// Components
import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";

// Context
import { MeetingContext } from "@/components/meeting/Meeting";

export default function Chat() {
  const {showChat} = useContext(MeetingContext)
  return (
    <section className={`chat flex flex-col ${showChat ? "flex-1" : ""}`}>
      <ChatHeader />
      {showChat && <ChatContent />}
    </section>
  );
}
