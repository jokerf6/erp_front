import React from "react";

import { Icon } from "@iconify/react";

// Components
import Images from "./images";

export default function Task(props: { id: any; task: any }) {
  const { id, task } = props;
  const taskMembers: any[] = task.members;
  const defaultImage = "/images/default pic.svg";

  return (
    <div className=" flex flex-col w-full bg-white px-4 py-4 rounded-xl gap-3">
      <div className=" w-full justify-between items-center flex">
        <div className="text-tot bg-bot px-5 py-1 rounded h-fit capitalize">
          {task.status}
        </div>
        <Icon
          icon={"tabler:dots"}
          className=" text-main text-2xl cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className=" text-2xl text-main font-bold">{task.name}</h1>
        {task.images && <Images images={task.images} id={id} />}
        {!task.images && task.files !== 0 && (
          <Images images={[`${defaultImage}`]} id={id} />
        )}
        <p className=" text-brief text-sm">
          Brainstorming brings team members' diverse experience into play.
        </p>
      </div>

      <div className=" w-full  flex justify-between items-center mt-5">
        <div className=" flex">
          {taskMembers.map((member, index) => {
            return (
              <img
                key={index}
                src={member.image}
                alt={member.name}
                className={`${
                  index !== 0 ? "-ml-2" : ""
                } w-6 h-6 rounded-full border border-white`}
              />
            );
          })}
        </div>
        <div className="flex gap-5 mr-3">
          <div className="flex flex-col sm:flex-row items-center text-lg gap-1 text-brief flex-wrap justify-center max-w-[75px] sm:max-w-[112px]">
            <Icon icon={"ant-design:comment-outlined"} className=" text-xl" />
            <span className="text-xs lg:text-sm flex gap-1 capitalize flex-wrap justify-center">
              <span>{task.comments}</span>{" "}
              <span className="hidden xxs:block">
                {task.comments === 1 ? "comment" : "comments"}
              </span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center text-lg gap-1 text-brief flex-wrap justify-center max-w-[75px] sm:max-w-[80px]">
            <Icon
              icon={"solar:folder-with-files-linear"}
              className=" text-xl"
            />
            <span className="text-xs lg:text-sm flex gap-1 capitalize flex-wrap justify-center">
              <span>{task.files}</span>{" "}
              <span className="hidden xxs:block">{task.files === 1 ? "file" : "files"}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
