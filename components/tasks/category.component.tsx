import { Icon } from "@iconify/react";
import React from "react";
import Task from "./task.component";

export default function Category(props: {
  setOverlay: any;
  isSmallScreen: boolean;
}) {
  const { setOverlay, isSmallScreen } = props;
  // const taskContainerStyles = isSmallScreen ?
  // {

  // } : {

  // }

  return (
    <div
      className=" flex flex-col p-3 lg:p-6 bg-cat rounded-xl h-full"
      style={{ backgroundColor: "#E9E3D58A", minWidth: "272px" }}
    >
      <div className=" flex justify-between pb-3">
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
        className="flex overflow-y-auto flex-col gap-3 mt-3 cat bg-red-500"
        // style={{ maxHeight: "500px" }}
      >
        <Task setOverlay={setOverlay} />
        <Task setOverlay={setOverlay} />
        <Task setOverlay={setOverlay} />
      </div>
    </div>
  );
}
