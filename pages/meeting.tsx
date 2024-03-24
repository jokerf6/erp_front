import React, { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";

// Components
import MeetingHeader from "@/components/meeting/meetingHeader";
import ProfilePicture from "@/components/default/profilePicture.component";

// Functions
import getWindowWidth from "@/functions/getWindowWidth";

export default function Meeting() {
  const meetingHeaderRef = useRef<any>();
  const [meetingHeaderHeight, setMeetingHeaderHeight] = useState<number>();
  useEffect(() => {
    setMeetingHeaderHeight(meetingHeaderRef.current.clientHeight);
  }, [getWindowWidth().windowWidth]);

  return (
    <div>
      <MeetingHeader meetingHeaderRef={meetingHeaderRef} />

      <main className="flex min-h-screen">
        <div className="flex flex-1 flex-col items-center">
          <div className=" meeting--screen w-full flex flex-col flex-1 p-[10px]">
            <div className="screens-content flex-1 flex flex-col gap-[10px]">
              {/* Main Screen */}
              <div className="relative main-screen bg-[#E0E0E0] flex flex-1 items-center justify-center rounded-[15px]">
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
              </div>

              {/* Smaller Screens */}
              {/* <div className="flex overflow-y-auto gap-[10px] pb-1">
                <div className="relative w-[250px] h-[120px] bg-green-500 flex-shrink-0 rounded-[10px]">
                  <div className="absolute bottom-3 left-3 bg-[#0F0E0E4D] text-white font-[500] px-4 rounded-full py-1 capitalize cursor-default">
                    name
                  </div>
                  <div className="absolute bottom-3 right-3 mic p-2 rounded-full bg-primary-pink text-white">
                    <Icon icon="fluent:mic-off-28-regular" width={20} />
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Meeting Controls */}
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

              {/* Admins Only? */}
              {/* <button className="record p-2 rounded-full bg-[#F2EBFE] text-primary-purple">
                <Icon icon="ri:record-circle-line" width={25} />
              </button> */}

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

        <div className="bg-yellow-500 w-[30%] flex flex-col">
          <div className="participants flex-1 flex flex-col">
            <div className="participants--header bg-white flex justify-between items-center pl-[20px] pr-[10px] h-[70px] border-b border-[#FDFBFB]">
              <div className="title capitalize text-primary-purple text-[18px] font-[600]">
                participants
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 text-primary-purple bg-[#F2EBFE] rounded-[61px] px-[20px] py-[12px]">
                  <span className="capitalize text-[14px] font-[600]">
                    add participant
                  </span>
                  <Icon icon="icons8:add-user" width={20} />
                </button>
                <button className="text-primary-purple p-1">
                  <Icon icon="ep:arrow-up-bold" />
                </button>
              </div>
            </div>
            <div className="participants--content bg-lite-white flex flex-col items-center px-[24px] py-[35px] gap-[15px] flex-1">
              <div className="particpant--card bg-white flex justify-between items-center w-[351px] h-[69px] rounded-[31.5px] px-[15px]">
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
              <div className="particpant--card bg-white flex justify-between items-center w-[351px] h-[69px] rounded-[31.5px] px-[15px]">
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
            </div>
          </div>

          <div className="chat flex-1 flex flex-col">
            <div className="chat--header bg-white flex justify-between items-center pl-[20px] pr-[10px] h-[70px] border-b border-[#FDFBFB]">
              <div className="title capitalize text-primary-purple text-[18px] font-[600]">
                chat
              </div>
              <button className="text-primary-purple p-1">
                <Icon icon="ep:arrow-up-bold" />
              </button>
            </div>
            <div className="chat--content bg-lite-white flex flex-col items-center flex-1">
              <div className="chat--messages px-[24px] py-[35px] flex-1">
                content
              </div>
              <div className="chat--input bg-white w-full flex items-center px-[30px] py-[15px] h-[72px] border-t-[1.5px] border-[#EDF0F6]">
                <div className="bg-lite-white text-[#8D8F98] w-full px-[20px] py-[10px] rounded-[88px]">
                  chat input here
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
