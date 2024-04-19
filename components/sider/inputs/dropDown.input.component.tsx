import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi"; // Assuming you're using react-icons for the chevron icon

export default function DropDown(props: {
  data: any;
  name: string;
  handleChange?: any;
}) {
  return (
      <div className="relative w-full flex items-center justify-center">
        <select
          required
          name={props.name}
          className="block cursor-pointer text-[14px] pr-[32px] appearance-none w-full placeholder:text-[8px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          placeholder="choose task priority"
          onChange={props.handleChange}
        >
          <option key="default" value="free">
            {props.name === "priority" ? "Task Priority" : "Choose The Project"}
          </option>
          {props.data.map((item: any) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
        <HiOutlineChevronDown className="absolute right-3 cursor-pointer" />
      </div>
  );
}
