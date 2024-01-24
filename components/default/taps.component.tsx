import React from "react";

export default function Taps() {
  return (
    <div
      className=" w-full px-10 flex gap-6 items-center"
      style={{ borderBottom: "6px solid #E9E3D5" }}
    >
      <span
        className="transition-all cursor-pointer text-main font-bold py-4 text-center relative after:transition-all after:absolute after:w-full after:h-1.5 hover:after:bg-main after:left-0 after:top-full"
        style={{ width: "90px" }}
      >
        My tasks
      </span>
      <span
        className="transition-all cursor-pointer text-text font-semibold py-4 text-center relative after:transition-all after:absolute after:w-full after:h-1.5 hover:after:bg-main after:left-0 after:top-full"
        style={{ width: "100px" }}
      >
        All projects
      </span>
    </div>
  );
}
