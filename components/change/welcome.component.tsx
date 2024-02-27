import React from "react";

export default function WelcomeChange() {
  return (
    <div className=" w-full flex flex-col items-start text-center">
      <span className="text-3xl lg:text-4xl w-full text-primary-black font-bold">
        Change your password
      </span>
      <p className="text-sm text-primary-black w-full">
        Set new one to keep it for yourself!
      </p>
    </div>
  );
}
