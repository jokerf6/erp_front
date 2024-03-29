import React, { useContext } from "react";

// Icons
import { AttachmentIcon, EmptyChatIcon, SendIcon } from "@/assets/icons";

// Context
import { MeetingContext } from "@/pages/meeting";

export default function ChatContent() {
  const { showParticipants } = useContext(MeetingContext);
  return (
    <div className="chat--content bg-lite-white flex flex-col items-center flex-1">
      <div
        className={`chat--messages px-[24px] ${
          showParticipants ? "" : "py-[35px]"
        } flex-1 w-full`}
      >
        <div className="empty-chat text-primary-purple h-full flex flex-col justify-center items-center gap-2">
          <EmptyChatIcon className="text-[97px] flex-shrink" />
          <p className="capitalize text-[18px] font-[500]">
            Start chat with Participants
          </p>
        </div>
      </div>
      
      <div className="chat--input bg-white w-full flex items-center px-[15px] py-[5px] h-[72px] border-t-[1.5px] border-l-[1.5px] border-[#EDF0F6]">
        <div className="bg-lite-white text-[#8D8F98] w-full rounded-[88px] flex justify-between items-center gap-2 px-[10px] py-[5px]">
          <button className="p-2">
            <AttachmentIcon className="text-[19px]" />
          </button>
          <input
            type="text"
            placeholder="Type Something..."
            className="bg-transparent flex-1 font-[500] outline-none"
          />
          <button className="bg-primary-purple rounded-full w-[30px] h-[30px] grid place-items-center">
            <SendIcon className="text-[20px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
