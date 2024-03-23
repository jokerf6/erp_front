import React from "react";

export default function ProfilePicture(props: {
  border: boolean;
  size: number;
}) {
  return (
    <img
      src="/images/Kerolos Fayez.jpg"
      alt="profile picture"
      width={props.size}
      height={props.size}
      className={`rounded-full object-cover ${
        props.border ? "border-[3px] border-white" : ""
      }`}
    />
  );
}
