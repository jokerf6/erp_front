import React, { useContext } from "react";

import { Icon } from "@iconify/react";

// Components 
import AsideSectionHeader from "../AsideSectionHeader/AsideSectionHeader";

// Context
import { MeetingContext } from "@/components/meeting/Meeting";

export default function ChatHeader() {
  const {showChat, setShowChat} = useContext(MeetingContext)
  return (
    <AsideSectionHeader>
      <AsideSectionHeader.Title>chat</AsideSectionHeader.Title>
      <button
        onClick={() => setShowChat((prev: boolean) => !prev)}
        className="text-primary-purple p-1"
      >
        {showChat ? (
          <Icon icon="ep:arrow-up-bold" />
        ) : (
          <Icon icon="ep:arrow-down-bold" />
        )}
      </button>
    </AsideSectionHeader>
  );
}
