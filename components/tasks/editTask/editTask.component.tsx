import React, { useState } from "react";

// Components
import Files from "./Files";
import Comments from "./Comments";
import Teammates from "./Teammates";
import Modal from "@/components/default/modal.component";

import { Icon } from "@iconify/react";
import AddComment from "./addComment";
import CheckBox from "@/components/default/checkBox";
import { statusList } from "@/static/statusList";

export default function EditTask(props: {
  setEditTaskOverlay: any;
  setAddComment: any;
  addComment: boolean;
}) {
  const [status, setStatus] = useState<number>(0);
  const { setEditTaskOverlay, setAddComment, addComment } = props;
  return (
    <Modal setOverlay={setEditTaskOverlay}>
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-[#FAFAFA] absolute top-0 right-0  overflow-y-hidden min-h-screen max-w-[600px] md:w-[50vw] z-[100] p-[20px] flex flex-col gap-5 justify-center"
      >
        {addComment && (
          <div className=" bg-black w-screen h-screen absolute -top-[10px] left-0 z-[100] opacity-70"></div>
        )}
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
          <div className="flex justify-between items-center">
            {statusList.map((item: string, idx: number) => {
              return (
                <CheckBox
                  key={idx}
                  active={idx === status}
                  text={item}
                  setStatus={setStatus}
                  id={idx}
                />
              );
            })}
          </div>
        </div>
        <Files />
        <Comments setAddComment={setAddComment} />
        <Teammates />
      </div>
    </Modal>
  );
}
