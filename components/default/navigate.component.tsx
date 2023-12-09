import React from "react";
import { Icon } from "@iconify/react";
export default function Navigate() {
  return (
    <div className=" xl:flex lg:flex md:flex hidden gap-4 items-center justify-center">
      <div className=" flex items-center justify-center gap-1">
        <Icon icon={"octicon:link-16"} className=" text-primary" />
        <span className=" text-primary text-sm">Incompany</span>
      </div>
      <div>
        <span className=" text-text text-sm">Privacy Policy</span>
      </div>
      <div>
        <span className=" text-sm text-text">Terms of Use</span>
      </div>
    </div>
  );
}
