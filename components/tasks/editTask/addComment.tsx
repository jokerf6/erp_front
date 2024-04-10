import Modal from "@/components/default/modal.component";
import { MEDIA } from "@/secrets";
import { AddCommentRequest } from "@/services/addComment";
import UserStore from "@/store/userStore";
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddComment(props: {
  setAddComment: any;
  taskId: string;
  edit: boolean;
  commentData: any;
}) {
  const [comment, setComment] = useState(
    props.edit ? props.commentData.text : ""
  );
  const [height, setHeight] = useState(50);
  const notify = async (error: string) => toast.error(error);

  const { setAddComment, taskId, edit, commentData } = props;
  const { user } = UserStore();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return AddCommentRequest(
        comment,
        notify,
        !edit ? taskId : commentData.id,
        getCookie("AccessToken")!,
        setAddComment,
        edit
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTasks"] });
      queryClient.invalidateQueries({ queryKey: ["getTaskId"] });
    },
  });
  return (
    <Modal setOverlay={setAddComment}>
      <div className="absolute top-0 left-0 right-0 bottom-0 items-center z-[21] bg-black/20 flex justify-center ">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-[10px] px-[20px] py-[15px] w-[350px] h-fit bg-white rounded-lg"
        >
          <h1 className=" font-bold text-[#251B37]">Add Comment</h1>
          <div className=" flex gap-2 ">
            <div>
              <Image
                src={MEDIA + user.idImage}
                alt="user--profile-image"
                width={34}
                height={34}
                className=" w-[34px] h-[34px] rounded-full cursor-pointer"
              />
            </div>

            <div className=" flex flex-col w-full h-full ">
              <div className=" w-full p-[10px] flex flex-col bg-[#F2EBFE] shadow-inner h-full shadow-inner-[#00000026]">
                <h1 className=" text-[#251B37] font-semibold text-[16px]">
                  {user.name}
                </h1>
                <textarea
                  maxLength={300}
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                    e.target.value.length >= 236
                      ? setHeight(120)
                      : e.target.value.length >= 177
                      ? setHeight(90)
                      : e.target.value.length >= 80
                      ? setHeight(70)
                      : "";
                  }}
                  className={` break-words font-[400]  outline-none bg-[#F2EBFE] ${`h-[${height}px]`} w-full text-[#00000066]  text-[14px]`}
                />
              </div>
              {comment.length >= 300 && (
                <span className=" text-[#992D2D] text-[14px]">
                  Your comment mustn’t exceed 300 word
                </span>
              )}
              {comment.length === 0 && (
                <span className=" text-[#992D2D] text-[14px]">
                  Your comment must have a word
                </span>
              )}
              <div className=" flex  w-full justify-between gap-[10px] mt-[10px]">
                <button
                  onClick={() => setAddComment(false)}
                  className=" py-[3px] w-full text-[#251B37] rounded-md border border-[#251B37]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => mutation.mutate()}
                  className="py-[3px]  w-full text-white rounded-md bg-[#251B37]"
                >
                  {mutation.isPending ? "Loading..." : "Done"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
