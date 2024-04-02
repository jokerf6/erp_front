import React from "react";

export default function MeetingCardsContainer(props: { children: any }) {
  return (
    <div className="meeting-cards-container flex flex-col gap-[24px]">
      {props.children}
    </div>
  );
}
