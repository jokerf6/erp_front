import React from "react";

import { Icon } from "@iconify/react";

export default function MeetingSmallScreens() {
  return (
    <section className="flex overflow-y-auto gap-[10px] pb-1">
      <div className="relative w-[250px] h-[120px] bg-green-500 flex-shrink-0 rounded-[10px]">
        <div className="absolute bottom-3 left-3 bg-[#0F0E0E4D] text-white font-[500] px-4 rounded-full py-1 capitalize cursor-default">
          name
        </div>
        <div className="absolute bottom-3 right-3 mic p-2 rounded-full bg-primary-pink text-white">
          <Icon icon="fluent:mic-off-28-regular" width={20} />
        </div>
      </div>
    </section>
  );
}
