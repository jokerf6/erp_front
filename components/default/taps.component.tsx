import React from "react";

export default function Taps() {
  return (
    <div
      className=" w-full px-1 lg:px-10 flex gap-2 lg:gap-6 flex-row capitalize"
      style={{ borderBottom: "6px solid #E9E3D5" }}
    >
      <span className="transition-all cursor-pointer text-main font-bold px-2 py-4 text-center relative after:transition-all after:absolute after:w-full after:h-1.5 hover:after:bg-main after:left-0 after:top-full">
        My tasks
      </span>
      <span className="transition-all cursor-pointer text-text font-semibold px-2 py-4 text-center relative after:transition-all after:absolute after:w-full after:h-1.5 hover:after:bg-main after:left-0 after:top-full">
        All projects
      </span>
      <span className="transition-all cursor-pointer text-text font-semibold px-2 py-4 text-center relative after:transition-all after:absolute after:w-full after:h-1.5 hover:after:bg-main after:left-0 after:top-full">
        Archived projects
      </span>
    </div>
  );
}
