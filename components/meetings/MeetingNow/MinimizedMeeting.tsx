import ProfilePicture from "@/components/default/profilePicture.component";
import {
  CallEndIcon,
  FullscreenEnterIcon,
  MicOnIcon,
  RecordingIcon,
  VideoOffIcon,
} from "@/assets/icons";
import { useContext } from "react";
import { HomeContext } from "@/layouts/home";

export default function MinimizedMeeting() {
  const { setShowMeeting, setMinimizeMeeting } = useContext(HomeContext);
  return (
    <div className="minimized-meeting fixed w-fit z-[3] bottom-3 left-3 bg-[linear-gradient(270deg,#F7F7F7_1.42%,#F0E8FF_100%)] border border-[#E0CEFF] drop-shadow-[-2px_2px_8px_0px_rgba(37,27,55,0.03)] text-[20px] text-white flex gap-[20px] items-center rounded-[30px] px-[15px] py-[10px]">
      <div className="flex gap-[16px] items-center">
        <ProfilePicture border={false} size={51} src={"/images/man.png"} alt="username" />
        <div className="recording-timer bg-[#0F0E0E4D] text-white font-[500] px-4 py-1 rounded-full text-[20px] flex gap-2 items-center">
          <RecordingIcon />
          <span>00:01:45</span>
        </div>
      </div>

      <button className="bg-primary-purple w-[40px] h-[40px] flex justify-center items-center rounded-full">
        <MicOnIcon />
      </button>
      <button className="bg-primary-pink w-[40px] h-[40px] flex justify-center items-center rounded-full">
        <VideoOffIcon />
      </button>
      <button
        onClick={() => {
          setShowMeeting(true);
          setMinimizeMeeting(false);
        }}
        className="bg-primary-purple w-[40px] h-[40px] flex justify-center items-center rounded-full"
      >
        <FullscreenEnterIcon />
      </button>
      <button onClick={() => setMinimizeMeeting(false)} className="bg-primary-pink px-[25px] h-[40px] flex justify-center items-center rounded-[73px]">
        <CallEndIcon className="text-[30px]" />
      </button>
    </div>
  );
}
