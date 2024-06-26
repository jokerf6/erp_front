import React, { useContext } from "react";

import { Icon } from "@iconify/react";

// Components
import AsideHeader from "../AsideHeader/AsideHeader";

// Context
import { MeetingContext } from "@/components/meetings/MeetingNow/Meeting";

export default function ParticipantsHeader() {
  const { showParticipants, setShowParticipants, setShowAddParticipants } =
    useContext(MeetingContext);
  return (
    <AsideHeader setShow={setShowParticipants}>
      <AsideHeader.Title>participants</AsideHeader.Title>
      <div className="flex items-center gap-2">
        {/* Admin only */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowAddParticipants(true);
          }}
          className="flex items-center gap-1 text-primary-purple bg-[#F2EBFE] rounded-[61px] px-[20px] py-[12px]"
        >
          <span className="capitalize text-[14px] font-[600]">
            add participant
          </span>
          <Icon icon="icons8:add-user" width={20} />
        </button>
        <AsideHeader.Arrow
          show={showParticipants}
          setShow={setShowParticipants}
        />
      </div>
    </AsideHeader>
  );
}
