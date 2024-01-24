import HeaderMain from "@/components/default/headerMain.component";
import HeaderMain2 from "@/components/default/headerMain2.component";
import Taps from "@/components/default/taps.component";
import TaskStatus from "@/components/default/taskStatus.component";
import Category from "@/components/tasks/category.component";
import TaskChecked from "@/components/tasks/Slider/taskStatus.component";
import TitleTask from "@/components/tasks/Slider/titleTask.component";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import categoryData from "@/utils/category.json";

export default function Home() {
  const [overlay, setOverlay] = useState(false);
  const [taskDetails, setTaskDetails] = useState(false);

  const categoryElements = categoryData.data.map((category) => {
    return (
      <Category
        key={category.title}
        setOverlay={setOverlay}
        title={category.title}
        tasksNumber={category.tasksNumber}
        accentColor={category.accentColor}
      />
    );
  });

  return (
    <div className=" flex flex-col h-screen">
      <HeaderMain />
      <div className="flex flex-col gap-5">
        <HeaderMain2 />
        <Taps />
      </div>
      <div className=" w-full flex gap-4 p-6 lg:px-10 lg:py-6  flex-col lg:flex-row flex-wrap">
        {categoryElements}
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
