import React, { useEffect, useState } from "react";

// Components
import Files from "./Files";
import Comments from "./Comments";
import Teammates from "./Teammates";
import Modal from "@/components/default/modal.component";
import Sider from "@/components/sider/Sider.component";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetTaskId } from "@/services/getTaskId";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Brief from "@/components/sider/SiderEdit/Brief";
import DueDate from "@/components/sider/SiderEdit/DueDate";
import Status from "@/components/sider/SiderEdit/Status";
import TaskPriority from "./TaskPriority";
import Title from "@/components/sider/SiderEdit/Title";
import CreatedAt from "@/components/sider/SiderEdit/CreatedAt";

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

  const [status, setStatus] = React.useState<string>(data?.status);
  useEffect(() => {
    setStatus(data?.status);
  }, [data]);

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
        <Sider.Header.Edit>
          <div className="flex justify-between items-center">
            <CreatedAt>{data.createdAt}</CreatedAt>
            <button>
              <Icon
                icon="gg:close-r"
                className="text-[1.5rem] cursor-pointer"
                onClick={() => {
                  setEditTaskOverlay(false);
                  setStatus("");
                }}
              />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <Title>{data.name}</Title>
            <TaskPriority priority={data.priority} />
          </div>

          <DueDate>{data.dueDate}</DueDate>

          <Brief>{data.brief}</Brief>

          <Status status={status} setStatus={setStatus} />
        </Sider.Header.Edit>

        <Files files={data.TaskFiles} id={task.id} />
        <Comments
          setAddComment={setAddComment}
          taskComments={data.TaskComments}
          setCommentId={setCommentId}
          setDeleteComment={setDeleteComment}
          setEditComment={setEditComment}
        />
        <Teammates
          cardPeople={data.taskAssignees}
          setAddTeammates={setAddTeammates}
        />
      </Sider>
    </Modal>
  );
}
