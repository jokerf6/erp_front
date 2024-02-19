import React, { useContext, useEffect, useRef } from "react";

import { Icon } from "@iconify/react";

// Components
import Task from "./task.component";

// Context
import { MyTasksContext } from "@/pages/home/pm/mytasks";

export default function Category(props: { title: any; category: any }) {
  const { setAddTaskOverlay } = useContext(MyTasksContext);
  const { category } = props;
  const categoryID = category.id;
  const tasksData: any[] = category.tasks;

  const categoryLine = React.useRef(null);
  const [isCategoryTopVisible, setIsCategoryTopVisible] = React.useState(true);
  React.useEffect(() => {
    const categoryLineObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsCategoryTopVisible(entry.isIntersecting);
      },
      { rootMargin: "-25px 0px 0px 0px" }
    );
    if (categoryLine.current) {
      categoryLineObserver.observe(categoryLine.current);
    }
  }, []);

  const stickyCategoryTopStyle = isCategoryTopVisible
    ? "rounded-t-xl bg-[#e9e3d58a]"
    : "sticky w-full top-0 shadow-[0_0_3px_0_rgba(0,0,0,0.5)] bg-[#e9e3d5]";

  return (
    <div className=" flex flex-col bg-[#e9e3d58a] rounded-xl  h-fit flex-1 lg:min-w-[400px]">
      <div
        className={`transition-all  flex justify-between py-4 z-[1] px-3 lg:px-6 ${stickyCategoryTopStyle}`}
      >
        <div className=" flex text-main items-center gap-2 cursor-default">
          <div
            className={` w-2 h-2 rounded-full`}
            style={{ backgroundColor: `${category.accentColor}` }}
          ></div>
          <span className={`text-lg font-semibold capitalize`}>
            {category.title}
          </span>
          <div
            className={`w-6 h-6 rounded-full flex text-sm items-center justify-center bg-[#E0E0E0] text-[#625F6D] font-medium `}
          >
            {category.tasks.length}
          </div>
        </div>
        {category.title === "to do" && (
          <div
            className={`w-6 h-6 rounded-lg bg-cat flex items-center justify-center cursor-pointer`}
            style={{ backgroundColor: "rgba(37, 27, 55, 0.2)" }}
            onClick={() => setAddTaskOverlay(true)}
          >
            <Icon icon={"lets-icons:add-round"} />
          </div>
        )}
      </div>
      <hr
        ref={categoryLine}
        className={`border `}
        style={{ borderColor: `${category.accentColor}` }}
      />
      <div className="flex flex-col gap-3 py-6 px-3 lg:px-6">
        {tasksData.map((task, index: number) => {
          return (
            <Task
              key={index}
              taskID={task.id}
              task={task}
              categoryID={categoryID}
            />
          );
        })}
      </div>
    </div>
  );
}
