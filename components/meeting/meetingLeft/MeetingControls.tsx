import React from "react";

import { Icon } from "@iconify/react";

export default function MeetingControls() {
  return (
    <section className="meeting--controls bg-white w-full flex justify-between items-center px-[30px] py-[15px] border-t-[1.5px] border-[#EDF0F6]">
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
    </section>
  );
}
