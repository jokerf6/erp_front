import React from "react";

export default function MeetingCardButton(props: { children: string }) {
  return (
    <button className="meeting-card-btn px-[13px] py-[8px] lg:px-[26px] lg:py-[16px] rounded-[26px] [background:linear-gradient(#F3F3F3,#F3F3F3)_padding-box,linear-gradient(260.02deg,#5A28B3_-16.1%,#E2778C_173.02%)_border-box] border border-transparent border-solid">
      <span className="bg-[linear-gradient(260.02deg,#5A28B3_-16.1%,#E2778C_173.02%)] bg-clip-text text-transparent text-[18px] font-[500]">
        {props.children}
      </span>
    </button>
  );
}
