import React from "react";

// Components
import Files from "./Files";
import Comments from "./Comments";
import Teammates from "./Teammates";
import Modal from "@/components/default/modal.component";
import TopEditTask from '@/components/tasks/editTask/TopEditTask.component'

export default function EditTask(props: {
  setEditTaskOverlay: any,
  setAddComment: any,
  addComment: boolean,
  taskName: string,
  taskPriority: string,
  taskComments: number,
  taskFiles: number,
  taskImages: any
}) {

  const { setEditTaskOverlay, setAddComment, addComment } = props;

  return (
    <Modal setOverlay={setEditTaskOverlay}>
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-[#FAFAFA] absolute top-0 right-0 min-h-screen max-w-[600px] md:w-[50vw] z-[100] p-[20px] flex flex-col gap-5"
      >
        {addComment && (
          <div className=" bg-black w-screen h-screen absolute -top-[10px] left-0 z-[100] opacity-70"></div>
        )}
        <TopEditTask 
        isOpen={setEditTaskOverlay} 
        taskName = {props.taskName}
        taskPriority ={props.taskPriority}
        />
        <Files
        taskFiles = {props.taskFiles}
        />
        <Comments 
        setAddComment={setAddComment}
        taskComments = {props.taskComments}
        />
        <Teammates
        cardPeople = {props.taskImages}
        />
      </div>
    </Modal>
  );
}
