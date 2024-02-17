import React from "react";

// Components
import Files from "./Files";
import Comments from "./Comments";
import Teammates from "./Teammates";
import Modal from "@/components/default/modal.component";

import { Icon } from "@iconify/react";

export default function EditTask(props: { setEditTaskOverlay: any }) {
  const { setEditTaskOverlay } = props;
  return (
    <Modal setOverlay={setEditTaskOverlay}>
      <div className="bg-[#FAFAFA] absolute top-0 right-0 min-h-screen max-w-[600px] xl:w-[50vw] z-[100] p-[20px] flex flex-col gap-5 justify-center">
        <div className="first-part  flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="">Created At 12 jan 2023 10:12 AM</h3>
            <Icon
              icon="gg:close-r"
              className="text-[1.5rem] cursor-pointer"
              onClick={() => setEditTaskOverlay(false)}
            />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[#251B37] text-[1.5rem]">
              Create Text Cases - Project Name
            </h1>
            <p className="text-[#D58D49] bg-[rgba(223,168,116,0.2)] rounded-lg px-4 py-1">
              Low
            </p>
          </div>
          <h2 className="text-[#FF375E] font-bold">
            To be Done in 12 jan 2023
          </h2>
          <p className="text-[#787486]">
            Create test cases for old APIs in tasks module in pages 1,2,3 and 4
          </p>
          <div className="task-container grid grid-cols-3">
            <div className="flex gap-2">
              <input type="radio" className="" name="status" id="todo" />
              <label htmlFor="todo">To Do</label>
            </div>
            <div className="flex gap-4">
              <input type="radio" className="" name="status" id="inProgress" />
              <label htmlFor="inProgress">in Progress</label>
            </div>
            <div className="flex gap-4">
              <input type="radio" className="" name="status" id="done" />
              <label htmlFor="done">Done</label>
            </div>
          </div>
        </div>
        <Files />
        <Comments />
        <Teammates />
      </div>
    </Modal>
  );
}
