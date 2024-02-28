import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function CheckBox(props: {
  active: boolean;
  text: string;
  setStatus: any;
  id: number;
}) {
  const activeColor = (props.text).toLowerCase() === "to do" 
  ? "mytasks-dotline-todo"
  : (props.text).toLowerCase() === "in progress"
    ? "mytasks-dotline-inprogress"
    : "mytasks-dotline-done";
  const activeBorderColor = `border-${activeColor}`;
  const activeCheckColor = `text-${activeColor}`;
  return (
    <div
      onClick={() => props.setStatus(props.id)}
      className=" flex gap-2 items-center cursor-pointer"
    >
      <div
        className={`bg-white flex items-center justify-center w-[22px] h-[22px] rounded-full ${
          props.active ? `border-2 ${activeBorderColor}` : "border border-gray-500"
        }  `}
      >
        {props.active && <FaCheck className={`${activeCheckColor} text-sm`} />}
      </div>

      <span
        className={` ${
          props.active ? "text-primary-purple" : " text-gray-500"
        } font-semibold text-lg`}
      >
        {props.text}
      </span>
    </div>
  );
}
