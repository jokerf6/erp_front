import React from "react";

export default function WelcomeOTP(props: { email: string }) {
  const { email } = props;
  return (
    <div className=" w-full flex flex-col items-center text-center">
      <span className=" text-4xl text-primary-black font-bold">Verification code</span>
      <p className=" text-p text-sm text-primary-black">
        Verification code is sent to {email}
      </p>
    </div>
  );
}
