import React, { useContext, useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";
import Image from "next/image";

// Components
import Images from "./images";

// Context
import { MyTasksContext } from "@/pages/home/pm/mytasks";

// Functions
import getTaskPriorityColors from "@/functions/getTaskPriorityColors";

import useMousePosition from "@/hooks/DragAndDrop";
import useDragAndDrop from "@/hooks/DragAndDrop";
import { on } from "events";
import TasksHeightStore from "@/store/taskssHeight";

export default function Task(props: {
  taskID: any;
  task: any;
  categoryID: string;
  categories: any;
  setCategories: any;
  getData: any;
}) {
  const { setEditTaskOverlay } = useContext(MyTasksContext);
  const { taskID, task, categoryID, categories, setCategories } = props;
  const TaskMembers = [
    "/images/Kerolos Fayez.jpg",
    "/images/Kerolos Fayez.jpg",
  ];
  const defaultImage = "/images/default pic.svg";
  const divRef = useRef<HTMLDivElement>(null);
  const { isDragging, handleDragStart, handleDragEnd, handleDrag } =
    useDragAndDrop();

  const { TaskSHeight, UpdateTaskSHeight } = TasksHeightStore();

  // Function that collect data from each task
  function handleData() {
    props.getData(
      task.status,
      task.name,
      task.comments,
      task.files,
      task.members
    );
    setEditTaskOverlay(true);
  }

  return (
    <div>
      {taskID[0] === "-" ? (
        <div
          id={taskID}
          ref={divRef}
          className={`flex flex-col w-full h-[10px] rounded-xl gap-3`}
        ></div>
      ) : (
        <div
          id={taskID}
          ref={divRef}
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={(e) => handleDragEnd(e, categories, setCategories)}
          onDrag={(e: any) => handleDrag(e, taskID, divRef)}
          className={`card ${
            isDragging ? `dragging card  ` : ""
          } flex flex-col w-full bg-primary-white px-4 py-4 rounded-xl gap-3`}
        >
          <div className=" w-full justify-between items-center flex">
            <div className={`${getTaskPriorityColors(task.status)} px-5 py-1 rounded h-fit capitalize`}>
              {task.status}
            </div>
            {/* <h1>{mousePosition.x}</h1> */}
            <Icon
              icon={"tabler:dots"}
              className=" text-primary-darkblue text-2xl cursor-pointer"
              onClick={handleData}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className=" text-2xl text-primary-darkblue font-bold">{task.name}</h1>
            {task.images && (
              <Images
                images={task.images}
                taskID={taskID}
                categoryID={categoryID}
              />
            )}
            {!task.images && task.files !== 0 && (
              <div
                className="w-full h-32 cursor-pointer"
                onClick={() => console.log("Open Files")}
              >
                <Image
                  src={defaultImage}
                  alt="Contain Files - Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <p className=" text-primary-p text-sm">
              Brainstorming brings team members' diverse experience into play.
            </p>
          </div>

          <div className=" w-full  flex justify-between items-center mt-5">
            <div className=" flex">
              {task.members.slice(0, 3).map((member: any, index: number) => {
                return (
                  <img
                    key={index}
                    src={member.image}
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
                <Icon
                  icon={"ant-design:comment-outlined"}
                  className=" text-xl"
                />
                <span className="text-xs lg:text-sm flex gap-1 capitalize flex-wrap justify-center">
                  <span>{task.comments}</span>{" "}
                  <span className="hidden xxs:block">
                    {/* TODO: Function for single or plural? */}
                    {task.comments === 1 ? "comment" : "comments"}
                  </span>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center text-lg gap-1 text-primary-p flex-wrap justify-center max-w-[75px] sm:max-w-[80px]">
                <Icon
                  icon={"solar:folder-with-files-linear"}
                  className=" text-xl"
                />
                <span className="text-xs lg:text-sm flex gap-1 capitalize flex-wrap justify-center">
                  <span>{task.files}</span>{" "}
                  <span className="hidden xxs:block">
                    {task.files === 1 ? "file" : "files"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
