import React from "react";

import Link from "next/link";

export default function PMTabs(props: {
  tabs: Array<string>;
  pmCurrentTab: string;
}) {
  const { tabs, pmCurrentTab } = props;

  const tabElements = tabs.map((tab) => {
    const tabRemovedSpaces = tab.replace(/ /g, "");
    const activeTabStyle =
      pmCurrentTab === tabRemovedSpaces ? "after:bg-main" : "grow-0";

    return (
      <Link
        key={tab}
        href={`/home/pm/${tabRemovedSpaces}`}
        className={`${activeTabStyle} flex-auto shrink-0 sm:flex-none text-sm sm:text-base transition-all cursor-pointer text-main font-bold px-2 py-4 text-center relative after:transition-all after:absolute after:w-full after:h-1.5 hover:after:bg-main after:left-0 after:top-full`}
      >
        {tab}
      </Link>
    );
  });

  return (
    <div className="w-full px-1 lg:px-10 flex gap-2 lg:gap-6 flex-row capitalize select-none border-b-[6px] border-[#E9E3D5]">
      {tabElements}
    </div>
  );
}
