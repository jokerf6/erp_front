import React from "react";

// Components
import Files from "./Files";
import Comments from "./Comments";
import Teammates from "./Teammates";
import Modal from "@/components/default/modal.component";
import TopEditTask from "@/components/tasks/editTask/TopEditTask.component";
import Sider from "@/components/default/sider.component";

export default function EditTask(props: {
  setEditTaskOverlay: any,
  setAddComment: any,
  addComment: boolean,
  taskCategory: string,
  taskName: string,
  taskPriority: string,
  taskComments: number,
  taskFiles: number,
  taskImages: any
}) {

  const { setEditTaskOverlay, setAddComment, addComment } = props;

  return (
    <Modal setOverlay={setEditTaskOverlay}>
      <Sider>
        <TopEditTask 
        isOpen={setEditTaskOverlay} 
        taskCategory={props.taskCategory}
        taskName = {props.taskName}
        taskPriority ={props.taskPriority}
        />
        <Files
        files = {props.taskFiles}
        />
        <Comments 
        setAddComment={setAddComment}
        taskComments = {props.taskComments}
        />
        <Teammates
        cardPeople = {props.taskImages}
        />
      </Sider>
    </Modal>
  );
}
