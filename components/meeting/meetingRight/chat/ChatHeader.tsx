import React, { useContext } from "react";

import { Icon } from "@iconify/react";

// Components 
import AsideSectionHeader from "../AsideSectionHeader/AsideSectionHeader";

// Context
import { MeetingContext } from "@/components/meeting/Meeting";

export default function ChatHeader() {
  const {showChat, setShowChat} = useContext(MeetingContext)
  return (
    <AsideSectionHeader setShow={setShowChat}>
      <AsideSectionHeader.Title>chat</AsideSectionHeader.Title>
      <AsideSectionHeader.Arrow show={showChat} setShow={setShowChat} />
    </AsideSectionHeader>
  );
}
