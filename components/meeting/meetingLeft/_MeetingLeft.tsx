import React from "react";

// Components
import MeetingMainScreen from "./MeetingMainScreen";
import MeetingSmallScreens from "./MeetingSmallScreens";
import MeetingControls from "./MeetingControls";


export default function MeetingLeft() {
  return (
    <section className="flex flex-1 flex-col items-center">
      <div className="meeting--screen w-full flex flex-col flex-1 p-[10px]">
        <div className="screens-content flex-1 flex flex-col gap-[10px]">
          <MeetingMainScreen />
          <MeetingSmallScreens />
        </div>
      </div>

      <MeetingControls />
    </section>
  );
}
