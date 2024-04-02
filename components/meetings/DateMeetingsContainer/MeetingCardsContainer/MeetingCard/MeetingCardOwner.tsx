import React from "react";

export default function MeetingCardOwner(props: { children: any }) {
  return (
    <div className="owner text-[#3F3C3D]">
      <span className="capitalize">{props.children}</span> meeting
    </div>
  );
}
