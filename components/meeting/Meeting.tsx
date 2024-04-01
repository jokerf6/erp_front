import React, { createContext, useContext, useState } from "react";

// Components
import MeetingHeader from "@/components/meeting/MeetingHeader";
import MeetingContent from "@/components/meeting/MeetingContent";
import Modal from "@/components/default/modal.component";

// Context
const MeetingContext = createContext({} as any);
export { MeetingContext };
import { HomeContext } from "@/layouts/home";

export default function Meeting() {
  const [showParticipants, setShowParticipants] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showAddParticipants, setShowAddParticipants] = useState(false);
  const { setShowMeeting } = useContext(HomeContext);

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
      <Modal setOverlay={setShowMeeting}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white absolute top-0 left-0 w-full"
        >
          <MeetingHeader />
          <MeetingContent />
        </div>
      </Modal>
    </MeetingContext.Provider>
  );
}
