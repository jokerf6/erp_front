import { Icon } from "@iconify/react";
import React from "react";
import Taps from "@/components/home/header/taps.component";
import Github from "@/components/home/header/github.component";

export default function HeaderMain() {
  return (
    <div className="pt-8 xl:px-40 lg:px-30 px-10 absolute top-0 left-0   flex flex-row justify-between items-center h-fit z-10 w-screen">
      <h1
        className=" text-white  font-extrabold text-3xl"
        style={{ letterSpacing: "1px" }}
      >
        Portfolio
      </h1>
      <Taps />

      <Github />
      <span className="xl:hidden lg:hidden ">
        <Icon
          icon={"pepicons-print:menu"}
          className=" text-4xl cursor-pointer text-white "
        />
      </span>
    </div>
  );
}
