import React, { useContext, useEffect, useRef } from "react";

import { Icon } from "@iconify/react";

// Components
import Task from "./task.component";

// Context
import { MyTasksContext } from "@/pages/home/pm/mytasks";

export default function Category(props: {
  id: string;
  title: any;
  category: any;
  categories: any;
  setCategories: any;
  getData: any;
}) {
  const { setAddTaskOverlay } = useContext(MyTasksContext);
  const { category, categories, setCategories, id } = props;
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
    ? "rounded-t-xl bg-lite-purple-54"
    : "sticky w-full top-0 shadow-[0_0_3px_0_rgba(0,0,0,0.5)] bg-lite-purple";

  const dotLineStyle =
    category.title === "to do"
      ? "bg-mytasks-dotline-todo"
      : category.title === "in progress"
      ? "bg-mytasks-dotline-inprogress"
      : "bg-mytasks-dotline-done";

  return (
    <div className=" flex flex-col bg-transparent rounded-xl h-100 flex-1 lg:min-w-[400px]">
      <div
        id={id}
        className={`transition-all  flex justify-between py-4 z-[1] px-3 lg:px-6 ${stickyCategoryTopStyle}`}
      >
        <div className=" flex text-mytasks-primary-text items-center gap-2 cursor-default">
          <div className={` w-2 h-2 rounded-full ${dotLineStyle}`}></div>
          <span className={`text-lg font-semibold capitalize`}>
            {category.title}
          </span>
          <div
            className={`w-6 h-6 rounded-full flex text-sm items-center justify-center bg-mytasks-number-bg text-mytasks-number-text font-medium `}
          >
            {category.tasks.length}
          </div>
        </div>
        {category.title === "to do" && (
          <div
            className={`w-6 h-6 rounded-lg bg-add-btn-purple-bg-20 text-add-btn-purple-text flex items-center justify-center cursor-pointer`}
            onClick={() => setAddTaskOverlay(true)}
          >
            <Icon icon={"lets-icons:add-round"} />
          </div>
        )}
      </div>
      <div ref={categoryLine} className={`h-[2px] ${dotLineStyle}`}></div>
      <div className="flex flex-col gap-3 py-6 px-3 lg:px-6 rounded-b-xl bg-lite-purple-54">
        {tasksData.map((task, index: number) => {
          return (
            <Task
              key={index}
              taskID={task.id}
              task={task}
              categoryID={categoryID}
              categories={categories}
              setCategories={setCategories}
              getData={props.getData}
            />
          );
        })}
      </div>
    </div>
  );
}
