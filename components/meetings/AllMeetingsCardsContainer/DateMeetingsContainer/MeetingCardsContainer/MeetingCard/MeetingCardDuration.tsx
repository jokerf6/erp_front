import React from "react";

export default function MeetingCardDuration(props: { children: any }) {
  return (
    <div className="meeting-duration text-primary-purple text-[17px] text-center lg:text-start lg:text-[20px]">
      {props.children}
    </div>
  );
}
