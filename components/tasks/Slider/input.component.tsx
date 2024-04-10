import React from "react";

export default function Input(props: {
  type: string;
  name: string;
  title?: string;
}) {
  return (
        <input
          name={props.name}
          required
          type={props.type}
          className={`${props.title !== "datetime-local" ?  "" : "pr-[32px]"} block text-[14px]  appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
          id={props.title}
          placeholder="Enter task name"
        />
  );
}
