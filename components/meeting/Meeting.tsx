import React, { createContext, useState } from "react";

// Components
import MeetingHeader from "@/components/meeting/MeetingHeader";
import MeetingContent from "@/components/meeting/MeetingContent";

// Context
const MeetingContext = createContext({} as any);
export { MeetingContext };

export default function Meeting() {
  const [showParticipants, setShowParticipants] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showAddParticipants, setShowAddParticipants] = useState(false);

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
      <div className="bg-white absolute top-0 left-0 w-full h-screen z-[3] overflow-y-auto transition-all">
        <MeetingHeader />
        <MeetingContent />
      </div>
    </MeetingContext.Provider>
  );
}
