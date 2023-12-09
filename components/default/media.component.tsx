import React from "react";
import { Icon } from "@iconify/react";
export default function Media() {
  return (
    <div className=" flex gap-2">
      <Icon icon="gg:facebook" className=" text-primary" />
      <Icon icon="bi:twitter" className=" text-primary" />
      <Icon icon="ri:linkedin-fill" className=" text-primary" />
      <Icon icon="bi:instagram" className=" text-primary" />
    </div>
  );
}
