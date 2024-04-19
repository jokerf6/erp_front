import React from "react";

export default function Description(props: {
  children: any;
  formEntry?: any;
  handleChange?: any;
}) {
  return (
    <textarea
      name="description"
      className="block text-[14px] pr-[32px] appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D]  placeholder:capitalize bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      id="description"
      placeholder={`${props.children}`}
      value={props.formEntry}
      onChange={props.handleChange}
    />
  );
}
