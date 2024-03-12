import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { BiExport } from "react-icons/bi";
export default function Comments(props: { setAddComment: any , taskComments:number}) {
  const { setAddComment } = props;
  const [comments, setComments] = useState([
    {
      name: "Matthew Adel",
      text: "Please hold stand up meeting after every update.",
      date: "10:13Am 13 Feb.2022",
      image: "/images/Kerolos Fayez.jpg",
    },
  ]);
  return (
    <div className="file-content flex flex-col gap-4">
      <div className="part-one flex justify-between">
        <div className=" flex gap-2  justify-center items-center">
          <p className="text-sider-primary-text font-bold text-[20px]">Comments</p>
          <p className="bg-sider-number-bg text-sider-number-text rounded-full flex justify-center items-center min-w-[25px] h-[25px] font-[500] px-2">
            {props.taskComments}
          </p>
        </div>
        <Icon
          onClick={() => setAddComment(true)}
          icon="ic:baseline-plus"
          className="bg-add-btn-pink-bg-20 text-add-btn-pink-text cursor-pointer w-[21px] h-[21px]"
        />
      </div>
      <div className="files-contents flex flex-col gap-4 border-2 border-[#E7E7E7] rounded-[12px] p-5 overflow-auto max-h-[200px] scroll-m-2 bg-[#FFFFFF]">
        <div className="part-two flex flex-col gap-4 ">
          {comments.length === 0 && <div>This task don't have comments</div>}
          {comments.length > 0 &&
            comments.map((item: any, idx: number) => {
              return (
                <div className="flex  gap-4 items-start" key={idx}>
                  <img
                    src={item["image"]}
                    alt="Photo of commeter"
                    className="w-[45px] h-[45px] rounded-full"
                  />
                  <div className="comment-content p-5 bg-sider-comment-bg text-sider-comment-text rounded-xl flex-1">
                    <div className="first-line flex justify-between">
                      <h1 className="font-bold">{item["name"]}</h1>
                      <h3 className="text-[0.8rem]">{item["date"]}</h3>
                    </div>
                    <p>{item["text"]}</p>
                    <div className="flex justify-end gap-1">
                      <span className="text-sider-comment-edit-text cursor-pointer">Edit</span>
                      <span>.</span>
                      <span className="text-sider-comment-delete-text cursor-pointer">Delete</span>
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
