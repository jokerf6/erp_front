import React from "react";

export default function MeetingCardInfo(props: { children: any }) {
  return (
    <div className="meeting--info flex flex-col md:flex-row items-center gap-2 lg:gap-[24px]">
      {props.children}
    </div>
  );
}
