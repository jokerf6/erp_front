import React from "react";

export default function MeetingCardInfo(props: { children: any }) {
  return (
    <div className="meeting--info flex items-center gap-[24px]">
      {props.children}
    </div>
  );
}
