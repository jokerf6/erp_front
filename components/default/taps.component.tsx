import React from "react";

export default function Taps() {
  return (
    <div className=" w-full px-10 flex gap-6 my-4">
      <span
        className=" text-main font-semibold pb-4 px-2"
        style={{ borderBottom: "3px solid #251B37" }}
      >
        My tasks
      </span>
      <span className=" text-text">All projects</span>
    </div>
  );
}
