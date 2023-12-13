import React from "react";
import { Icon } from "@iconify/react";

export default function LoadingButton() {
  return (
    <button
      disabled
      className=" w-full bg-primary  flex items-center justify-center bg-main font-b py-4 rounded-md mt-10 text-white font-bold  hover:shadow-lg"
    >
      <span className=" flex items-center justify-center gap-2">
        Loading
        <Icon
          icon={"line-md:loading-loop"}
          className=" text-white w-fit text-lg"
        />
      </span>
    </button>
  );
}
