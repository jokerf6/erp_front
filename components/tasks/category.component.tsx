import { Icon } from "@iconify/react";
import React from "react";
import Task from "./task.component";

export default function Category(props: { setOverlay: any }) {
  const { setOverlay } = props;
  return (
    <div
      className=" flex flex-col w-1/2 px-4 bg-cat rounded-xl"
      style={{ backgroundColor: "#E9E3D58A" }}
    >
      <div className=" flex justify-between py-3">
        <div className=" flex text-main items-center gap-2">
          <div className=" w-2 h-2 rounded-full bg-main"></div>
          <span className=" text-lg font-semibold">To Do</span>
          <div className=" w-6 h-6 rounded-full flex text-sm items-center justify-center bg-cat">
            4
          </div>
        </div>
        <div className=" w-6 h-6 rounded-lg text-main bg-cat flex items-center justify-center">
          <Icon icon={"lets-icons:add-round"} />
        </div>
      </div>
      <hr className=" border border-main" />
      <div
        className=" max-h-auto flex flex-col overflow-y-auto gap-3 mt-3 cat"
        style={{ maxHeight: "50vh" }}
      >
        <Task setOverlay={setOverlay} />
        <Task setOverlay={setOverlay} />
      </div>
    </div>
  );
}
