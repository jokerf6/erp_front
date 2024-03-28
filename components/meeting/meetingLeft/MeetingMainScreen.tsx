import React from "react";

import { Icon } from "@iconify/react";

// Components
import ProfilePicture from "@/components/default/profilePicture.component";

export default function MeetingMainScreen() {
  return (
    <section className="relative main-screen bg-[#E0E0E0] flex flex-1 items-center justify-center rounded-[15px]">
      <div className="recording-timer absolute top-3 left-3 bg-[#0F0E0E4D] text-white font-[500] px-4 rounded-full cursor-default text-[20px]">
        00:01:45
      </div>
      <div className="user-name absolute bottom-3 left-3 bg-[#0F0E0E4D] text-white font-[500] px-4 rounded-full py-1 capitalize cursor-default text-[20px]">
        kerolos fayez
      </div>
      <div className="absolute bottom-3 right-3 text-white bg-black/[30%] p-1 rounded-full">
        <Icon icon="solar:soundwave-linear" width={35} />
      </div>
      <div className="bg-transparent rounded-full p-2 border-4 border-[#FF375E]/30">
        <ProfilePicture border={false} size={100} />
      </div>
    </section>
  );
}
