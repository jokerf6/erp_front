import React, { useContext } from "react";

// Components
import ParticipantsHeader from "./ParticipantsHeader";
import ParticipantsContent from "./ParticipantsContent";
import AddParticipants from "./AddParticipants";

// Context
import { MeetingContext } from "@/components/meetings/MeetingNow/Meeting";

export default function Participants() {
  const { showParticipants, showAddParticipants } = useContext(MeetingContext);

  return (
    <section className="relative participants flex flex-col">
      <ParticipantsHeader />
      {showParticipants && <ParticipantsContent />}
      {showAddParticipants && <AddParticipants />}
    </section>
  );
}
