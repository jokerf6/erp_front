import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function CheckBox(props: {
  active: boolean;
  text: string;
  setStatus: any;
  id: number;
}) {
  return (
    <div className=" flex gap-2 items-center">
      {!props.active && (
        <div
          onClick={() => props.setStatus(props.id)}
          className=" cursor-pointer border w-[22px] h-[22px] rounded-full border-gray-500  bg-white flex"
        ></div>
      )}
      {props.active && (
        <div className=" items-center justify-center border-2 cursor-pointer  w-[22px] h-[22px] rounded-full border-[#5C02FF]  bg-white flex">
          <FaCheck className=" text-[#5C02FF] text-sm" />
        </div>
      )}

      <span
        className={` ${
          props.active ? "text-[#251B37]" : " text-gray-500"
        } font-semibold text-lg`}
      >
        {props.text}
      </span>
    </div>
  );
}
