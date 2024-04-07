import React from "react";

export default function Input(props: {
  type: string;
  name: string;
  title?: string;
}) {
  return (
    <div className="input-1 flex  flex-col gap-1">
      <label
        className="text-[#251B37] text-[14px] font-[500]"
        htmlFor={props.title}
      >
        {props.title}{" "}
        <span className="text-[14px] font-[400] text-[red]"> (Required)</span>
      </label>
      {props.type !== "datetime-local" ? (
        <input
          name={props.name}
          required
          type={props.type}
          className="block text-[14px] pr-[32px] appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id={props.title}
          placeholder="Enter task name"
        />
      ) : (
        <input
          name={props.name}
          required
          type={props.type}
          className="block text-[14px] appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] border border-gray-400 bg-transparent hover:border-gray-500 px-4 pr-[10px] py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id={props.title}
          placeholder="Enter task name"
        />
      )}
    </div>
  );
}
