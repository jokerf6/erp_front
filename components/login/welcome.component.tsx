import React from "react";

export default function Welcome() {
  return (
    <div className=" w-full flex flex-col items-start text-center">
      <span className="text-3xl lg:text-4xl w-full text-primary-black font-bold">Welcome on board!</span>
      <p className=" text-p text-sm text-primary-black w-full">Sign in to your account</p>
    </div>
  );
}
