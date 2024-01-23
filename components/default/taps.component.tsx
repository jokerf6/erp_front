import React from "react";

export default function Taps() {
  return (
    <div
      className=" w-full px-10 flex gap-6 items-center"
      style={{ borderBottom: "6px solid #E9E3D5" }}
    >
      <span
        className="text-main font-semibold bg-red-500 py-4 relative after:absolute after:w-full after:h-1.5 hover:after:bg-main after:left-0 after:top-full hover:font-bold text-center"
        style={{ width: "90px" }}
      >
        My tasks
      </span>
      <span
        className="text-text font-semibold bg-red-500 py-4 relative after:absolute after:w-full after:h-1.5 hover:after:bg-main after:left-0 after:top-full hover:font-bold text-center"
        style={{ width: "100px" }}
      >
        All projects
      </span>
    </div>
  );
}
