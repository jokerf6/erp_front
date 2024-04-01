import { useContext } from "react";

import { Icon } from "@iconify/react";

// Components
import ProfilePicture from "@/components/default/profilePicture.component";

// Context
import { MeetingContext } from "@/components/meeting/Meeting";
import { MicOffIcon, VideoOnIcon } from "@/assets/icons";

export default function ParticipantsContent() {
  const { showChat } = useContext(MeetingContext);
  return (
    <div
      className={`  px-[24px] py-[20px] bg-lite-white ${
        showChat ? "max-h-[calc(50vh-100px)]" : "max-h-[calc(100vh-140px)]"
      }`}
    >
      <div
        className={`participants--content overflow-y-auto h-full flex flex-col items-center gap-[15px] meeting-scrollbar pr-2`}
      >
        {new Array(7).fill(undefined).map((participant, index) => (
          <div
            key={index}
            className="particpant--card bg-white flex justify-between items-center w-full max-w-[351px] min-h-[69px] rounded-full pr-[15px] pl-[9px]"
          >
            <div className="particpant--info flex items-center gap-2">
              <ProfilePicture
                border={false}
                size={55}
                src={"/images/man.png"}
              />
              <span className="name capitalize text-primary-purple text-[16px] font-[500]">
                Kerolos Fayez
              </span>
            </div>
            <div className="participant--media flex gap-2 items-center text-[24px]">
              <MicOffIcon className="text-primary-pink" />
              <VideoOnIcon className="text-primary-purple" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
