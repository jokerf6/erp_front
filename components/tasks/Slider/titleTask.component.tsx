import React from "react";
import TaskStatus from "../../default/taskStatus.component";

export default function TitleTask() {
  return (
    <div
      className=" p-8 bg-white flex h-full absolute right-0  flex-col gap-4 "
      style={{ width: "40vw" }}
    >
      <div className=" flex w-full justify-between">
        <h1 className=" text-main text-2xl font-bold">Create test cases</h1>
        <TaskStatus />
      </div>
      <p className="-my-4 text-primary2 font-semibold text-sm">
        To be done in 12 Jan. 2023
      </p>
      <p className=" mt-2 text-brief text-sm">
        Create test cases for old APIs in tasks module in pages 1,2,3 and 4{" "}
      </p>
    </div>
  );
}
