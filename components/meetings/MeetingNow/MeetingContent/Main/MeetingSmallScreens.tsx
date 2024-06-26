import React from "react";

import { MicOffIcon, MicOnIcon } from "@/assets/icons";
import ProfilePicture from "@/components/default/profilePicture.component";
import Image from "next/image";
import MeetingStore from "@/store/meeting";
import { MEDIA } from "@/secrets";

export default function MeetingSmallScreens() {
  const { users } = MeetingStore();
  return (
    <div className="flex overflow-x-auto gap-[10px] pb-2 meeting-scrollbar">
      {users.map((participant: any, index: number) => {
        return (
          <div
            key={index}
            className="relative w-[250px] h-[120px] bg-[#E0E0E0] flex-shrink-0 rounded-[10px] grid place-items-center"
          >
            <div className="absolute bottom-3 left-3 bg-[#0F0E0E4D] text-white font-[500] px-4 rounded-full py-1 capitalize cursor-default">
              {participant.user.name}
            </div>
            <div className="absolute bottom-3 right-3 mic p-2 rounded-full bg-primary-pink text-white">
              <MicOffIcon className="text-[20px]" />
              {/* <MicOnIcon className="text-[20px]" /> */}
            </div>
            <ProfilePicture
              border={true}
              size={70}
              src={MEDIA + participant.user.image}
              alt="username"
            />
            {/* <Image
              src={"/images/photo 1.jpg"}
              alt="camera-test"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[250px] h-[120px] rounded-md object-cover"
            /> */}
          </div>
        );
      })}
    </div>
  );
}
