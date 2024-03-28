import React from "react";

export default function ChatContent() {
  return (
    <div className="chat--content bg-lite-white flex flex-col items-center flex-1">
      <div className="chat--messages px-[24px] py-[35px] flex-1">content</div>
      <div className="chat--input bg-white w-full flex items-center px-[30px] py-[15px] h-[72px] border-t-[1.5px] border-[#EDF0F6]">
        <div className="bg-lite-white text-[#8D8F98] w-full px-[20px] py-[10px] rounded-[88px]">
          chat input here
        </div>
      </div>
    </div>
  );
}
