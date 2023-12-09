import React from "react";
import Navigate from "./navigate.component";
import Media from "./media.component";

export default function Footer() {
  return (
    <div className=" px-10 flex justify-between shadow-sm bg-white w-full py-2">
      <Navigate />
      <Media />
      <span className=" text-grey2 text-sm">@All rights reserved</span>
    </div>
  );
}
