import React, { useContext } from "react";

// Components
import ParticipantsHeader from "./ParticipantsHeader";
import ParticipantsContent from "./ParticipantsContent";

// Context
import { MeetingContext } from "@/pages/meeting";

export default function Participants() {
  const { showParticipants } = useContext(MeetingContext);
  return (
    <section className="participants flex flex-col">
      <ParticipantsHeader />
      {showParticipants && <ParticipantsContent />}
    </section>
  );
}
