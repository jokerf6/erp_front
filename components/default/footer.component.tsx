import React from "react";
import Navigate from "./navigate.component";
import Media from "./media.component";

export default function Footer() {
  return (
    <div className=" flex items-center justify-center xl:w-half lg:w-half w-full  absolute bottom-10 xl:left-1/2 lg:left-1/2 left-0">
      <span className=" text-center text-main">
        Copyright © 2023. All rights reserved.
      </span>
    </div>
  );
}
