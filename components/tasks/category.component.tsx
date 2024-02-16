import { Icon } from "@iconify/react";
import React from "react";
import Task from "./task.component";

export default function Category(props: {
  setOverlay: any;
  title: string;
  tasksNumber: number;
  accentColor: string;
  isSmallWindow: boolean;
  setPassInput: any;
}) {
  const { setOverlay, title, tasksNumber, accentColor, isSmallWindow } = props;

  const categoryLine = React.useRef(null);
  const [isCategoryTopVisible, setIsCategoryTopVisible] = React.useState(true);
  React.useEffect(() => {
    const catgeoryLineobserver = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        const entry = entries[0];
        setIsCategoryTopVisible(entry.isIntersecting);
      },
      { rootMargin: "-25px 0px 0px 0px" }
    );
    if (categoryLine.current) {
      catgeoryLineobserver.observe(categoryLine.current);
    }
  }, []);
  const stickyCategoryTopStyle = isCategoryTopVisible
    ? "rounded-t-xl bg-[#e9e3d58a]"
    : "sticky w-full top-0 shadow-[0_0_3px_0_rgba(0,0,0,0.5)] bg-[#e9e3d5]";

  return (
    <div className=" flex flex-col bg-[#e9e3d58a] rounded-xl h-fit flex-1 lg:min-w-[400px]">
      <div
        className={`transition-all  flex justify-between py-4 z-[1] px-3 lg:px-6 ${stickyCategoryTopStyle}`}
      >
        <div className=" flex text-main items-center gap-2 cursor-default">
          <div
            className={` w-2 h-2 rounded-full`}
            style={{ backgroundColor: `${accentColor}` }}
          ></div>
          <span className={`text-lg font-semibold capitalize`}>{title}</span>
          <div
            className={`w-6 h-6 rounded-full flex text-sm items-center justify-center bg-[#E0E0E0] text-[#625F6D] font-medium `}
          >
            {tasksNumber}
          </div>
        </div>
        <div
          className={`w-6 h-6 rounded-lg bg-cat flex items-center justify-center cursor-pointer`}
          style={{ backgroundColor: "rgba(37, 27, 55, 0.2)" }}
          onClick={()=> props.setPassInput(true)}
        >
          <Icon icon={"lets-icons:add-round"} />
        </div>
      </div>
      <hr
        ref={categoryLine}
        className={`border `}
        style={{ borderColor: `${accentColor}` }}
      />
      <div className="flex overflow-y-auto flex-col gap-3 py-6 px-3 lg:px-6">
        <Task setOverlay={setOverlay} isSmallWindow={isSmallWindow} />
        <Task setOverlay={setOverlay} isSmallWindow={isSmallWindow} />
        <Task setOverlay={setOverlay} isSmallWindow={isSmallWindow} />
        <Task setOverlay={setOverlay} isSmallWindow={isSmallWindow} />
      </div>
    </div>
  );
}
