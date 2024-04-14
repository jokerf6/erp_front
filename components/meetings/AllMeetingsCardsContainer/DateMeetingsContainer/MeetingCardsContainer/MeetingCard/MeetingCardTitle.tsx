import React from "react";

export default function MeetingCardTitle(props: { children: string }) {
  return (
    <div className="title text-[18px] font-bold lg:font-[500] lg:text-[24px] text-primary-purple truncate">
      {props.children}
    </div>
  );
}
