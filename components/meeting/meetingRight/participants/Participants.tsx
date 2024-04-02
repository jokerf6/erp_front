import React, { useContext } from "react";

// Components
import ParticipantsHeader from "./ParticipantsHeader";
import ParticipantsContent from "./ParticipantsContent";
import AddParticipants from "./AddParticipants";

// Context
import { MeetingContext } from "@/components/meeting/Meeting";

// Hooks
import useScrollBlockHook from "@/hooks/useScrollBlock";

export default function Participants() {
  const { showParticipants, showAddParticipants } = useContext(MeetingContext);
  useScrollBlockHook(showAddParticipants);

  return (
    <section className="relative participants flex flex-col">
      <ParticipantsHeader />
      {showParticipants && <ParticipantsContent />}
      {showAddParticipants && <AddParticipants />}
    </section>
  );
}
