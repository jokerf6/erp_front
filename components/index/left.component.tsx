import React from "react";

export default function Left() {
  return (
    <div
      className="hidden lg:flex lg:flex-1 relative"
    >
      <img
        src="/images/loginPage.png"
        className="-z-[1] absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        className="-z-[1] absolute top-0 left-0 bg-black bg-opacity-10 w-full h-full"
      ></div>

      <h1
        className="self-end mb-[32px] ml-[24px] w-fit items-center text-white2 font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
      >
        Manage Your Business Perfectly!
      </h1>
    </div>
  );
}
