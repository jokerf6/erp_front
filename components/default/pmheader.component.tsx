import React from "react";

import { Icon } from "@iconify/react";

export default function PMHeader(props: { tabs: Array<string>,  pmCurrentTab: string }) {
  const { tabs, pmCurrentTab } = props;
  return (
    <div className=" w-full flex justify-between items-center px-5 lg:px-10 py-4">
      <span className=" text-main font-semibold text-xl">PM</span>
      <div className=" flex gap-2 items-center">
        <span className=" text-text">PM</span>
        <Icon icon={"ep:arrow-right"} className=" text-text" />
        <span className=" text-main font-bold capitalize">{tabs.filter(tab => tab.replace(/ /g, "") === pmCurrentTab && tab)}</span>
      </div>
    </div>
  );
}
