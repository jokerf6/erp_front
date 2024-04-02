import React from "react";

export default function MeetingCardTitle(props: { children: any }) {
  return (
    <div className="title text-[24px] text-primary-purple">
      {props.children}
    </div>
  );
}
