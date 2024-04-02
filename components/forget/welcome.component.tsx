import React from "react";

export default function WelcomeForget() {
  return (
    <div className=" w-full flex flex-col items-start">
      <span className=" text-4xl text-primary-black font-bold">
        Forgot your password ?
      </span>
      <p className=" text-p text-sm text-primary-black mt-1">
        Please confirm your email address below and we will send you a
        verification code.
      </p>
    </div>
  );
}
