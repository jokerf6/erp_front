import { Icon } from "@iconify/react";
import React from "react";
import Images from "./images";
import TaskStatus from "../default/taskStatus.component";

export default function Task(props: { setOverlay: any; isSmallWindow: any }) {
  const { setOverlay, isSmallWindow } = props;
  const persons = [
    "/images/loginPage.jpg",
    "/images/loginPage.jpg",
    "/images/loginPage.jpg",
  ];
  return (
    <div className=" flex flex-col w-full bg-white px-4 py-4 rounded-xl gap-3">
      <div className=" w-full justify-between items-center flex">
        <TaskStatus />
        <Icon
          icon={"tabler:dots"}
          className=" text-main text-2xl cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className=" text-2xl text-main font-bold">Create test cases</h1>
        <Images images={["d", "s"]} setOverlay={setOverlay} />
        <p className=" text-brief text-sm">
          Brainstorming brings team members' diverse experience into play.{" "}
        </p>
      </div>

      <div className=" w-full  flex justify-between items-center mt-5">
        <div className=" flex">
          {persons.map((item, idx) => {
            return (
              <img
                src={item}
                alt="person"
                className={`${
                  idx !== 0 ? "-ml-2" : ""
                } w-6 h-6 rounded-full border border-white`}
              />
            );
          })}
        </div>
        <div className="flex gap-5 mr-3">
          <div
            className="flex flex-col sm:flex-row items-center text-lg gap-1 text-brief flex-wrap justify-center"
            style={{ maxWidth: "112px" }}
          >
            <Icon icon={"ant-design:comment-outlined"} className=" text-xl" />
            <span className="text-xs lg:text-sm flex gap-1 capitalize">
              <span>150</span> comments
            </span>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center text-lg gap-1 text-brief flex-wrap justify-center"
            style={{ maxWidth: "70px" }}
          >
            <Icon
              icon={"solar:folder-with-files-linear"}
              className=" text-xl"
            />
            <span className="text-xs lg:text-sm flex gap-1 capitalize">
              <span>14</span> files
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
