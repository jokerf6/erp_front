import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function CheckBox(props: {
  active: boolean;
  text: string;
  setStatus: any;
  id: number;
}) {
  const activeBorderColor =
    props.text.toLowerCase() === "to do"
      ? "border-mytasks-dotline-todo"
      : props.text.toLowerCase() === "in progress"
      ? "border-mytasks-dotline-inprogress"
      : "border-mytasks-dotline-done";
  const activeCheckColor =
    props.text.toLowerCase() === "to do"
      ? "text-mytasks-dotline-todo"
      : props.text.toLowerCase() === "in progress"
      ? "text-mytasks-dotline-inprogress"
      : "text-mytasks-dotline-done";
  return (
    <div
      onClick={() => {
        if (props.id === 1) {
          props.setStatus("ToDo");
        } else if (props.id === 2) {
          props.setStatus("InProgress");
        } else {
          props.setStatus("Done");
        }
      }}
      className=" flex gap-2 items-center cursor-pointer"
    >
      <div
        className={`bg-white flex items-center justify-center w-[22px] h-[22px] rounded-full ${
          props.active
            ? `border-2 ${activeBorderColor}`
            : "border border-[#0D062D70]"
        }  `}
      >
        {props.active && <FaCheck className={`${activeCheckColor} text-sm`} />}
      </div>

      <span
        className={` ${
          props.active ? "text-primary-purple" : " text-primary-p"
        } font-semibold text-lg`}
      >
        {props.text}
      </span>
    </div>
  );
}
