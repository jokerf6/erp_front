import React from "react";

export default function ProjectProgress(props: { cardProgress: number }) {
  return (
    <>
      <div className="bg-[#A3908452] rounded-3xl h-3">
        <p
          className=" h-[inherit] bg-gradient-purple-progress rounded-3xl"
          style={{ width: `${props.cardProgress}%` }}
        ></p>
      </div>
      <div className="flex justify-between items-center text-lg font-medium">
        <p>Progress</p>
        <p>{props.cardProgress}</p>
      </div>
    </>
  );
}
