import React, { useEffect, useRef, useState } from "react";

// Components
import MeetingHeader from "@/components/meeting/meetingHeader";

// Functions
import getWindowWidth from "@/functions/getWindowWidth";
import ProfilePicture from "@/components/default/profilePicture.component";

export default function Meeting() {
  const meetingHeaderRef = useRef<any>();
  const [meetingHeaderHeight, setMeetingHeaderHeight] = useState<number>();
  useEffect(() => {
    setMeetingHeaderHeight(meetingHeaderRef.current.clientHeight);
  }, [getWindowWidth().windowWidth]);

  return (
    <div>
      <MeetingHeader meetingHeaderRef={meetingHeaderRef} />

      <main
        className="flex bg-red-500"
        style={{
          minHeight: `calc(100vh - ${
            meetingHeaderHeight ? meetingHeaderHeight : "120"
          }px)`,
        }}
      >
        <div className="bg-green-500 flex flex-1 flex-col items-center gap-[10px] pt-[10px]">
          <div className="relative meeting--screen w-full max-w-[calc(100%-20px)] flex flex-col flex-1 rounded-[18px]">
            <div className="recording-timer absolute top-3 left-3 bg-[#0F0E0E4D] text-white text-[20px] font-[500] px-4 rounded-full">
              00:01:45
            </div>
            <div className="user-name absolute bottom-3 left-3 bg-[#0F0E0E4D] text-white text-[20px] font-[500] px-4 rounded-full py-1 capitalize">
              kerolos fayez
            </div>
            <div className="screen-content bg-[#E0E0E0] flex-1 flex items-center justify-center rounded-[inherit]">
              <div className="bg-transparent rounded-full p-2 border-4 border-[#FF375E]/30">
                <ProfilePicture border={false} size={"100"} />
              </div>
            </div>
          </div>

          <div className="meeting--controls bg-red-500 w-full flex justify-between p-[30px]">
            <div className="minimize">arrow-south-west</div>
            <div className="media">mute-camera-etc...</div>
            <div className="end-meeting">End Call</div>
          </div>
        </div>
        <div className="bg-yellow-500 w-[30%]">Right</div>
      </main>
    </div>
  );
}
