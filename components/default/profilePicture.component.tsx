import Image from "next/image";
import React from "react";

export default function ProfilePicture(props: {
  border: boolean;
  size: number;
}) {
  return (
    <Image
      src="/images/man.png"
      alt="profile picture"
      width={props.size}
      height={props.size}
      sizes="100vw"
      className={`rounded-full object-cover select-none ${
        props.border ? "border-[3px] border-white" : ""
      }`}
    />
  );
}
