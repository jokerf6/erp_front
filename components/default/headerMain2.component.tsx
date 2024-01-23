import { Icon } from "@iconify/react";
import React from "react";

export default function HeaderMain2() {
  return (
    <div className=" w-full flex justify-between items-center px-10 pt-4">
      <span className=" text-main font-semibold text-xl">PM</span>
      <div className=" flex gap-2 items-center">
        <span className=" text-text">PM</span>
        <Icon icon={"ep:arrow-right"} className=" text-text" />
        <span className=" text-main font-bold">My tasks</span>
      </div>
    </div>
  );
}
