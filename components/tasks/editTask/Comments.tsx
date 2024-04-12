import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { BiExport } from "react-icons/bi";
import { FormatDate } from "@/utils/formatDate";
import { MEDIA } from "@/secrets";
import EditItemTitle from "@/components/sider/SiderEdit/EditItem/EditItemTitle";
import EditItemNum from "@/components/sider/SiderEdit/EditItem/EditItemNum";
import EditItemTitleNum from "@/components/sider/SiderEdit/EditItem/EditItemTitleNum";

export default function Comments(props: {
  setAddComment: any;
  taskComments: any;
  setCommentId: any;
  setDeleteComment: any;
  setEditComment: any;
}) {
  const {
    setEditComment,
    setDeleteComment,
    setCommentId,
    setAddComment,
    taskComments,
  } = props;

  return (
    <div className="file-content flex flex-col gap-4 p-[20px]">
      <div className="part-one flex justify-between">
        <EditItemTitleNum>
          <EditItemTitle>comments</EditItemTitle>
          <EditItemNum>{taskComments.length}</EditItemNum>
        </EditItemTitleNum>
        <Icon
          onClick={() => setAddComment(true)}
          icon="ic:baseline-plus"
          className="bg-add-btn-pink-bg-20 text-[#FF375E] cursor-pointer w-[21px] h-[21px]"
        />
      </div>
      <div className="files-contents flex flex-col gap-4 border-2 border-[#E7E7E7] rounded-[12px] p-5 overflow-auto max-h-[200px] scroll-m-2 bg-[#FFFFFF]">
        <div className="part-two flex flex-col gap-4 ">
          {taskComments.length === 0 && (
            <div>This task don't have comments</div>
          )}
          {taskComments.length > 0 &&
            taskComments.map((item: any, idx: number) => {
              return (
                <div className="flex  gap-4 items-start" key={idx}>
                  <img
                    src={MEDIA + item["user"]["image"]}
                    alt="Photo of commeter"
                    className="w-[32px] h-[32px] rounded-full"
                  />
                  <div className="comment-content p-5 bg-sider-comment-bg text-sider-comment-text rounded-xl flex-1">
                    <div className="first-line flex justify-between">
                      <h1 className="font-bold">{item["user"]["name"]}</h1>
                      <h3 className="text-[0.8rem]">
                        {FormatDate(item["createdAt"], true)}
                      </h3>
                    </div>
                    <p>{item["text"]}</p>
                    <div className="flex justify-end gap-1">
                      <span
                        onClick={() => {
                          setEditComment(true);
                          setCommentId(item);
                        }}
                        className="text-sider-comment-edit-text cursor-pointer hover:underline"
                      >
                        Edit
                      </span>
                      <span>.</span>
                      <span
                        onClick={() => {
                          setDeleteComment(true);
                          setCommentId(item);
                        }}
                        className="text-sider-comment-delete-text cursor-pointer hover:underline"
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
