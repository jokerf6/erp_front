import HeaderMain from "@/components/default/headerMain.component";
import HeaderMain2 from "@/components/default/headerMain2.component";
import Taps from "@/components/default/taps.component";
import TaskStatus from "@/components/default/taskStatus.component";
import Category from "@/components/tasks/category.component";
import TaskChecked from "@/components/tasks/Slider/taskStatus.component";
import TitleTask from "@/components/tasks/Slider/titleTask.component";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function Home() {
  const [overlay, setOverlay] = useState(false);
  const [taskDetails, setTaskDetails] = useState(true);
  return (
    <div className=" flex flex-col h-screen">
      <HeaderMain />
      <HeaderMain2 />
      <Taps />
      <hr
        style={{
          border: "1px solid #E9E3D5",
          marginTop: "-18px",
          zIndex: "-1",
        }}
      />
      <div className=" w-full px-10 flex gap-4 py-6 h-full ">
        <Category setOverlay={setOverlay} />
        <Category setOverlay={setOverlay} />
        <Category setOverlay={setOverlay} />
      </div>
      {overlay && (
        <div className=" absolute w-screen h-screen flex items-center justify-center top-0 left-0 bg-black bg-opacity-50">
          <div className=" bg-white p-4 w-1/2">
            <div className=" w-full flex justify-between items-center">
              <span className=" text-main">Task Images</span>{" "}
              <span
                className=" text-red-500 cursor-pointer"
                onClick={() => setOverlay(false)}
              >
                x
              </span>
            </div>
            <div className=" flex gap-2 items-center">
              <Icon
                icon={"ep:arrow-left-bold"}
                className=" text-2xl cursor-pointer"
              />

              <img
                src="/images/loginPage.png"
                className=" w-full"
                style={{ height: "50vh" }}
              />
              <Icon
                icon={"ep:arrow-right-bold"}
                className=" text-2xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
      {taskDetails && (
        <div className=" absolute w-screen h-screen flex items-center justify-center top-0 left-0 bg-black bg-opacity-50">
          <TitleTask />
          <TaskChecked />
        </div>
      )}
    </div>
  );
}
