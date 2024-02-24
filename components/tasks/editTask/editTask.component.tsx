import React from "react";

// Components
import Files from "./Files";
import Comments from "./Comments";
import Teammates from "./Teammates";
import Modal from "@/components/default/modal.component";
import TopEditTask from '@/components/tasks/editTask/TopEditTask.component'

export default function EditTask(props: {
  setEditTaskOverlay: any;
  setAddComment: any;
  addComment: boolean;
}) {

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
        <TopEditTask isOpen={setEditTaskOverlay} />
        <Files />
        <Comments setAddComment={setAddComment} />
        <Teammates />
      </div>
    </Modal>
  );
}
