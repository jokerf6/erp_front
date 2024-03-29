import React, { useContext } from "react";

// Icons
import { EmptyChatIcon } from "@/assets/icons";

// Context
import { MeetingContext } from "@/pages/meeting";

export default function ChatContent() {
  const { showParticipants } = useContext(MeetingContext);
  return (
    <div className="chat--content bg-lite-white flex flex-col items-center flex-1">
      <div className={`chat--messages px-[24px] ${showParticipants ? "" : "py-[35px]"} flex-1 w-full`}>
        <div className="empty-chat text-primary-purple h-full flex flex-col justify-center items-center gap-2">
          <EmptyChatIcon className="text-[97px] flex-shrink" />
          <p className="capitalize text-[18px] font-[500]">
            Start chat with Participants
          </p>
        </div>
      </div>
      <div className="chat--input bg-white w-full flex items-center px-[30px] py-[15px] h-[72px] border-t-[1.5px] border-[#EDF0F6]">
        <div className="bg-lite-white text-[#8D8F98] w-full px-[20px] py-[10px] rounded-[88px]">
          chat input here
        </div>
      </div>
    </div>
  );
}
