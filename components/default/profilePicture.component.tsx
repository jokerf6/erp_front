import Image from "next/image";
import React from "react";

export default function ProfilePicture(props: {
  border: boolean;
  size: number;
  src: string;
  alt: string;
}) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.size}
      height={props.size}
      sizes="100vw"
      className={`rounded-full object-cover select-none ${
        props.border ? "border-[3px] border-white" : ""
      }`}
    />
  );
}
