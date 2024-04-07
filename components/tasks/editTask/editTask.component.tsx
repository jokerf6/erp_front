import React from "react";

// Components
import Files from "./Files";
import Comments from "./Comments";
import Teammates from "./Teammates";
import Modal from "@/components/default/modal.component";
import TopEditTask from "@/components/tasks/editTask/TopEditTask.component";
import Slider from "@/components/sider/sider.component";

export default function EditTask(props: {
  setEditTaskOverlay: any;
  setAddComment: any;
  addComment: boolean;
  task: any;
}) {
  const { setEditTaskOverlay, task, setAddComment, addComment } = props;

  return (
    <Modal setOverlay={setEditTaskOverlay}>
      <Slider>
        <TopEditTask
          isOpen={setEditTaskOverlay}
          taskCategory={task.category}
          taskName={task.name}
          taskPriority={task.priority}
        />
        <Files files={task.files} />
        <Comments setAddComment={setAddComment} taskComments={task.comments} />
        <Teammates cardPeople={task.images} />
      </Slider>
    </Modal>
  );
}
