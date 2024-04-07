import React, { useContext, useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { CSS } from "@dnd-kit/utilities";

// Components
import Images from "./images";

// Context
import { MyTasksContext } from "@/pages/home/pm/mytasks";

// Functions
import getTaskPriorityColors from "@/functions/getTaskPriorityColors";
import { useSortable } from "@dnd-kit/sortable";
import { MEDIA } from "@/secrets";

export default function Task(props: {
  taskID: any;
  task: any;
  categoryID: string;
}) {
  const { setEditTaskOverlay } = useContext(MyTasksContext);
  const { taskID, task, categoryID } = props;

  const divRef = useRef<HTMLDivElement>(null);

  // Function that collect data from each task
  function handleData() {
    setEditTaskOverlay(true);
  }
  // drag

  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      opacity-30
    bg-mainBackgroundColor p-2.5 max-h-[100px] min-h-[100px] items-center border-dashed flex text-left rounded-xl border-2 border-[#5030E596] border-opacity-[59%] bg-[#50438B0F] bg-opacity-[6%]  cursor-grab relative
    "
      />
    );
  }
  return (
    <div
      onBlur={toggleEditMode}
      onKeyDown={(e) => {
        if (e.key === "Enter" && e.shiftKey) {
          toggleEditMode();
        }
      }}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClickCapture={toggleEditMode}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <div
        className={`card cursor-grab flex flex-col w-full ${
          task.id[0] === "-" ? "   hidden" : "bg-primary-white"
        }   px-4 py-4 rounded-xl gap-3`}
      >
        <div className=" w-full justify-between items-center flex">
          <div
            className={`${getTaskPriorityColors(
              task.status
            )} px-5 py-1 rounded h-fit capitalize`}
          >
            {task.priority}
          </div>

          <Icon
            icon={"tabler:dots"}
            className=" text-primary-darkblue text-2xl cursor-pointer"
            onClick={handleData}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className=" text-2xl text-primary-darkblue font-bold">
            {task.name}
          </h1>
          {task.TaskFiles.length > 0 && (
            <Images
              images={task.TaskFiles}
              taskID={taskID}
              categoryID={categoryID}
            />
          )}

          <p className=" text-primary-p text-sm">{task.brief}</p>
        </div>

        <div className=" w-full  flex justify-between items-center mt-5">
          <div className=" flex">
            {task.taskAssignees
              .slice(0, 3)
              .map((member: any, index: number) => {
                return (
                  <img
                    key={index}
                    src={MEDIA + member.user.image}
                    alt={member}
                    className={`${
                      index !== 0 ? "-ml-2" : ""
                    } w-6 h-6 rounded-full border border-white`}
                  />
                );
              })}
          </div>
          <div className="flex gap-5 mr-3">
            <div className="flex flex-col sm:flex-row items-center text-lg gap-1 text-primary-p flex-wrap justify-center max-w-[75px] sm:max-w-[112px]">
              <Icon icon={"ant-design:comment-outlined"} className=" text-xl" />
              <span className="text-xs lg:text-sm flex gap-1 capitalize flex-wrap justify-center">
                <span>{task._count.TaskComments}</span>{" "}
                <span className="hidden xxs:block">
                  {task._count.TaskComments === 1 ? "comment" : "comments"}
                </span>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center text-lg gap-1 text-primary-p flex-wrap justify-center max-w-[75px] sm:max-w-[80px]">
              <Icon
                icon={"solar:folder-with-files-linear"}
                className=" text-xl"
              />
              <span className="text-xs lg:text-sm flex gap-1 capitalize flex-wrap justify-center">
                <span>{task._count.TaskFiles}</span>{" "}
                <span className="hidden xxs:block">
                  {task._count.TaskFiles === 1 ? "file" : "files"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
