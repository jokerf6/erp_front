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

  return (
    <MeetingContext.Provider
      value={{ showParticipants, setShowParticipants, showChat, setShowChat }}
    >
      <MeetingHeader />
      <MeetingContent />
    </MeetingContext.Provider>
  );
}
