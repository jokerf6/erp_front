import Image from "next/image";
import React, { useState } from "react";

export default function AddComment(props: { setAddComment: any }) {
  const [comment, setComment] = useState("");
  const [height, setHeight] = useState(50);
  const { setAddComment } = props;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-[100] flex justify-center ">
      <div className="flex flex-col gap-[10px] px-[20px] py-[15px] w-[350px] h-fit  bg-white rounded-lg">
        <h1 className=" font-bold text-[#251B37]">Add Comment</h1>
        <div className=" flex gap-2 ">
          <div>
            <Image
              src="/images/Kerolos Fayez.jpg"
              alt="user--profile-image"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            />{" "}
          </div>

          <div className=" flex flex-col w-full h-full ">
            <div className=" w-full p-[10px] flex flex-col bg-[#F2EBFE] shadow-inner h-full shadow-inner-[#00000026]">
              <h1 className=" text-[#251B37] font-semibold text-[16px]">
                Ahmed Mohamed
              </h1>
              <textarea
                maxLength={300}
                value={comment}
                onChange={(e) => {
                  console.log(e.target.value.length);
                  setComment(e.target.value);
                  e.target.value.length >= 236
                    ? setHeight(120)
                    : e.target.value.length >= 177
                    ? setHeight(90)
                    : e.target.value.length >= 80
                    ? setHeight(70)
                    : "";
                }}
                className={` break-words  outline-none bg-[#F2EBFE] ${`h-[${height}px]`} w-full text-[#00000066] font-light text-[15px]`}
              />
            </div>
            {comment.length >= 300 && (
              <span className=" text-[#992D2D] text-[14px]">
                Your comment mustn’t exceed 300 word
              </span>
            )}
            {comment.length === 0 && (
              <span className=" text-[#992D2D] text-[14px]">
                Your comment mustn’t have a word
              </span>
            )}
            <div className=" flex  w-full justify-between gap-[10px] mt-[10px]">
              <button
                onClick={() => setAddComment(false)}
                className=" py-[3px] w-full text-[#251B37] rounded-md border border-[#251B37]"
              >
                Cancel
              </button>
              <button className="py-[3px]  w-full text-white rounded-md bg-[#251B37]">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
