import React from "react";

export default function WelcomeOTP(props: { email: string }) {
  const { email } = props;
  return (
    <div className=" w-full flex flex-col xl:items-strt lg:items-start items-center text-center">
      <span className=" text-4xl   text-main font-bold">Verification code</span>
      <p className=" text-p text-sm text-main">
        Verification code is sent to {email}
      </p>
    </div>
  );
}
