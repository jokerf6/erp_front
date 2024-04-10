import Modal from "@/components/default/modal.component";
import { DeleteCommentRequest } from "@/services/deleteComment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

export default function DeleteComment(props: {
  setAddComment: any;
  commentId: any;
}) {
  const { setAddComment, commentId } = props;
  const queryClient = useQueryClient();
  const notify = async (error: string) => toast.error(error);

  const mutation = useMutation({
    mutationFn: () => {
      return DeleteCommentRequest(
        commentId.id,
        notify,
        getCookie("AccessToken")!,
        setAddComment
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
          className="flex flex-col  items-center justify-center gap-[10px] px-[20px] py-[15px] w-[350px] h-fit bg-white rounded-lg"
        >
          <Image
            src={"/images/trash-can.png"}
            alt="image"
            width={60}
            height={60}
          />
          <p className=" text-[#251B37] text-[600] text-[16px]">
            Do you want to delete this comment ?
          </p>
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
    </Modal>
  );
}
