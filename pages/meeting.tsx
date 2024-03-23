import React, { useEffect, useRef, useState } from "react";

// Components
import MeetingHeader from "@/components/meeting/meetingHeader";

// Functions
import getWindowWidth from "@/functions/getWindowWidth";
import ProfilePicture from "@/components/default/profilePicture.component";
import { Icon } from "@iconify/react";

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
        className="flex"
        style={{
          minHeight: `calc(100vh - ${
            meetingHeaderHeight ? meetingHeaderHeight : "120"
          }px)`,
        }}
      >
        <div className="flex flex-1 flex-col items-center gap-[10px] pt-[10px]">
          <div className="relative meeting--screen w-full max-w-[calc(100%-20px)] flex flex-col flex-1 rounded-[18px]">
            <div className="recording-timer absolute top-3 left-3 bg-[#0F0E0E4D] text-white text-[20px] font-[500] px-4 rounded-full cursor-default">
              00:01:45
            </div>
            <div className="user-name absolute bottom-3 left-3 bg-[#0F0E0E4D] text-white text-[20px] font-[500] px-4 rounded-full py-1 capitalize cursor-default">
              kerolos fayez
            </div>
            <div className="screen-content bg-[#E0E0E0] flex-1 flex items-center justify-center rounded-[inherit]">
              <div className="bg-transparent rounded-full p-2 border-4 border-[#FF375E]/30">
                <ProfilePicture border={false} size={100} />
              </div>
            </div>
          </div>

          <div className="meeting--controls bg-white w-full flex justify-between items-center px-[30px] py-[15px] border-t-[1.5px] border-[#EDF0F6]">
            <button className="fullscreen-exit">
              <Icon icon="mdi-light:fullscreen-exit" width={35} />
            </button>
            <div className="media flex gap-2">
              <button className="mic p-2 rounded-full bg-primary-pink text-white">
                {/* <Icon icon="fluent:mic-28-regular" width={25}/> */}
                <Icon icon="fluent:mic-off-28-regular" width={25} />
              </button>
              <button className="camera p-2 rounded-full bg-primary-pink text-white">
                {/* <Icon icon="bi:camera-video" width={25}/> */}
                <Icon icon="bi:camera-video-off" width={25} />
              </button>
              <button className="sharescreen p-2 rounded-full bg-[#F2EBFE] text-primary-purple">
                <Icon icon="fluent:share-screen-start-48-regular" width={25} />
                {/* <Icon icon="fluent:share-screen-stop-48-regular" width={25}/> */}
              </button>
              <button className="chat p-2 rounded-full bg-[#F2EBFE] text-primary-purple">
                <Icon icon="lets-icons:chat-alt-3-light" width={25} />
              </button>
              <button className="settings p-2 rounded-full bg-[#F2EBFE] text-primary-purple">
                <Icon icon="tabler:dots" width={25} />
              </button>
            </div>
            <button className="end-meeting bg-primary-pink text-white text-[18px] font-[600] px-[20px] py-[5px] rounded-full">
              End Call
            </button>
          </div>
        </div>
        <div className="bg-yellow-500 w-[30%]">Right</div>
      </main>
    </div>
  );
}
