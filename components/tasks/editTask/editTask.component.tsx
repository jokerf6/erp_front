import React, { useEffect, useState } from "react";

// Components
import Files from "./Files";
import Comments from "./Comments";
import Teammates from "./Teammates";
import Modal from "@/components/default/modal.component";
import TopEditTask from "@/components/tasks/editTask/TopEditTask.component";
import Sider from "@/components/sider/Sider.component";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetTaskId } from "@/services/getTaskId";
import { getCookie } from "cookies-next";
import Image from "next/image";

export default function EditTask(props: {
  setEditTaskOverlay: any;
  setAddComment: any;
  addComment: boolean;
  setAddTeammates: any;
  task: any;
  setCommentId: any;
  setDeleteComment: any;
  setEditComment: any;
}) {
  const {
    setEditTaskOverlay,
    task,
    setAddComment,
    addComment,
    setAddTeammates,
    setCommentId,
    setDeleteComment,
    setEditComment,
  } = props;
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getTaskId"],
    queryFn: () => GetTaskId(getCookie("AccessToken")!, task.id),
    enabled: true,
  });

  if (isLoading || !data || task["id"] !== data["id"]) {
    return (
      <Modal setOverlay={setEditTaskOverlay}>
        <Sider>
          <div className=" flex items-center justify-center  w-full h-screen flex-col">
            <Image
              width={150}
              height={150}
              alt="Loading"
              src={"/images/loading.gif"}
            />
            <h1>Loading ...</h1>
          </div>
        </Sider>
      </Modal>
    );
  }
  return (
    <Modal setOverlay={setEditTaskOverlay}>
      <Sider>
        {!isLoading && data && data["id"] === task["id"] && (
          <TopEditTask
            isOpen={setEditTaskOverlay}
            task={data}
            loading={isLoading}
          />
        )}
        {!isLoading && data && data["id"] === task["id"] && (
          <Files files={data.TaskFiles} id={task.id} />
        )}
        {!isLoading && data && data["id"] === task["id"] && (
          <Comments
            setAddComment={setAddComment}
            taskComments={data.TaskComments}
            setCommentId={setCommentId}
            setDeleteComment={setDeleteComment}
            setEditComment={setEditComment}
          />
        )}
        {!isLoading && data && data["id"] === task["id"] && (
          <Teammates
            cardPeople={data.taskAssignees}
            setAddTeammates={setAddTeammates}
          />
        )}
      </Sider>
    </Modal>
  );
}
