import React from "react";

export default function MeetingCardTitleOwner(props: { children: any }) {
  return (
    <div className="meeting--title-owner font-[400] max-w-full overflow-hidden">{props.children}</div>
  );
}
