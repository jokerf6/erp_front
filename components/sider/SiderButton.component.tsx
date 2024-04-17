import React, { Children } from "react";

export default function SiderButton({ children }: any) {
  return (
    <div className="p-5 shadow-[0px_1px_10.1px_rgba(0,0,0,0.1)] bg-[#FFFFFF] flex justify-center items-center w-full">
      <button
        type="submit"
        onClick={(e) => e.preventDefault()}
        className="bg-gradient-purple-btn text-[1.5rem] flex-1 text-[#FFFFFF] rounded-[5px] py-[5px] capitalize"
      >
        {children}
      </button>
    </div>
  );
}