import React from "react";
import {
  ChatIcon,
  FullscreenExitIcon,
  MicOffIcon,
  MicOnIcon,
  RecordButtonIcon,
  ScreenShareIcon,
  ScreenShareStopIcon,
  SettingsIcon,
  VideoOffIcon,
  VideoOnIcon,
} from "@/assets/icons";

export default function MeetingControls() {
  return (
    <section className="meeting--controls bg-white w-full flex justify-between items-center px-[30px] py-[15px] border-t-[1.5px] border-[#EDF0F6]">
      <button className="fullscreen-exit">
        <FullscreenExitIcon className="text-[25px]" />
      </button>
      <div className="media flex gap-2">
        <button className="mic p-2 rounded-full bg-primary-pink text-white">
          {/* <MicOnIcon className="text-[25px]" /> */}
          <MicOffIcon className="text-[25px]" />
        </button>
        <button className="camera p-2 rounded-full bg-primary-pink text-white">
          {/* <VideoOnIcon className="text-[25px]" /> */}
          <VideoOffIcon className="text-[25px]" />
        </button>
        <button className="sharescreen p-2 rounded-full bg-[#F2EBFE] text-primary-purple">
          <ScreenShareIcon className="text-[25px]" />
          {/* <ScreenShareStopIcon className="text-[25px]" /> */}
        </button>

        {/* Admins Only? */}
        {/* <button className="record p-2 rounded-full bg-[#F2EBFE] text-primary-purple">
          <RecordButtonIcon className="text-[25px]" />
        </button> */}

        <button className="chat p-2 rounded-full bg-[#F2EBFE] text-primary-purple">
          <ChatIcon className="text-[25px]" />
        </button>
        <button className="settings p-2 rounded-full bg-[#F2EBFE] text-primary-purple">
          <SettingsIcon className="text-[25px]" />
        </button>
      </div>
      <button className="end-meeting bg-primary-pink text-white text-[18px] font-[600] px-[20px] py-[5px] rounded-full">
        End Call
      </button>
    </section>
  );
}
