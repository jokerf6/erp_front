import React, { useContext } from "react";

import { Icon } from "@iconify/react";

// Components
import AsideSectionHeader from "../AsideSectionHeader/AsideSectionHeader";

// Context
import { MeetingContext } from "@/components/meeting/Meeting";

export default function ParticipantsHeader() {
  const { showParticipants, setShowParticipants, setShowAddParticipants } =
    useContext(MeetingContext);
  return (
    <AsideSectionHeader setShow={setShowParticipants}>
      <AsideSectionHeader.Title>participants</AsideSectionHeader.Title>
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
        <AsideSectionHeader.Arrow
          show={showParticipants}
          setShow={setShowParticipants}
        />
      </div>
    </AsideSectionHeader>
  );
}
