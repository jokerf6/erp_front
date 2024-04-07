import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import { Icon } from "@iconify/react";

// Components
import Task from "./task.component";
import { CSS } from "@dnd-kit/utilities";

// Context
import { MyTasksContext } from "@/pages/home/pm/mytasks";
import { SortableContext, useSortable } from "@dnd-kit/sortable";

export default function Category(props: {
  category: any;
  setTask: any;
  tasks: any;
}) {
  const { setAddTaskOverlay } = useContext(MyTasksContext);
  const { category, tasks } = props;

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

  // Drag

  const [editMode, setEditMode] = useState(false);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: category.id,
    data: {
      type: "Column",
      category,
    },
    disabled: editMode,
  });
  const tasksIds = useMemo(() => {
    return tasks.map((task: any) => task.id);
  }, [tasks]);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  //
  return (
    <div
      ref={setNodeRef}
      style={style}
      className=" flex flex-col rounded-xl      overflow-y-auto flex-1 lg:min-w-[400px]"
    >
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className={`transition-all  flex justify-between     py-4 z-[1] px-3 lg:px-6 ${stickyCategoryTopStyle}`}
      >
        <div className=" flex text-mytasks-primary-text items-center gap-2   cursor-default">
          <div className={` w-2 h-2 rounded-full ${dotLineStyle}`}></div>
          <span className={`text-lg font-semibold capitalize`}>
            {category.title}
          </span>
          <div
            className={`w-6 h-6 rounded-full flex text-sm items-center justify-center bg-mytasks-number-bg text-mytasks-number-text font-medium `}
          >
            {tasks.length}
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
      <div className="flex flex-col gap-3 py-6  px-3 lg:px-6 rounded-b-xl bg-lite-purple-54">
        <SortableContext items={tasksIds}>
          {tasks.map((task: any, index: number) => {
            return (
              <Task
                key={index}
                taskID={task.id}
                task={task}
                categoryID={category.id}
              />
            );
          })}
        </SortableContext>
      </div>
    </div>
  );
}
