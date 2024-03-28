import { useContext } from "react";

import { Icon } from "@iconify/react";

// Components
import ProfilePicture from "@/components/default/profilePicture.component";

// Context
import { MeetingContext } from "@/pages/meeting";

export default function ParticipantsContent() {
  const { showChat } = useContext(MeetingContext);
  return (
    <div
      className={`participants--content overflow-y-auto bg-lite-white flex flex-col items-center py-[30px] gap-[15px] ${
        showChat ? "max-h-[calc(50vh-70px)]" : "max-h-[calc(100vh-140px)]"
      }`}
    >
      {new Array(2).fill(undefined).map(() => (
        <div className="particpant--card bg-white flex justify-between items-center w-[351px] min-h-[69px] rounded-[31.5px] px-[15px]">
          <div className="particpant--info flex items-center gap-2">
            <ProfilePicture border={true} size={50} />
            <span className="name capitalize text-primary-purple text-[16px] font-[500]">
              Kerolos Fayez
            </span>
          </div>
          <div className="participant--media flex gap-2">
            <Icon icon="fluent:mic-off-28-regular" width={24} />
            <Icon icon="bi:camera-video" width={24} />
          </div>
        </div>
      ))}
    </div>
  );
}
