import React, { useContext } from "react";

// Components 
import AsideHeader from "../AsideHeader/AsideHeader";

// Context
import { MeetingContext } from "@/components/meetings/MeetingNow/Meeting";

export default function ChatHeader() {
  const {showChat, setShowChat} = useContext(MeetingContext)
  return (
    <AsideHeader setShow={setShowChat}>
      <AsideHeader.Title>chat</AsideHeader.Title>
      <AsideHeader.Arrow show={showChat} setShow={setShowChat} />
    </AsideHeader>
  );
}
