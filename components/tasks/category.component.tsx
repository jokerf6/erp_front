import { Icon } from "@iconify/react";
import React from "react";
import Task from "./task.component";

export default function Category(props: {
  setOverlay: any;
  title: string;
  tasksNumber: number;
  accentColor: string;
  isSmallWindow: boolean;
}) {
  const { setOverlay, title, tasksNumber, accentColor, isSmallWindow } = props;

  const categoryTop = React.useRef(null);
  const [isCategoryTopVisible, setIsCategoryTopVisible] = React.useState(true);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsCategoryTopVisible(entry.isIntersecting);
      },
      { rootMargin: "-25px 0px 0px 0px" }
    );
    if (categoryTop.current) {
      observer.observe(categoryTop.current);
    }
  }, []);
  const stickyCategoryTopStyle = isCategoryTopVisible ? "" : "text-main";

  return (
    <div
      className=" flex flex-col bg-cat rounded-xl h-fit flex-1"
      style={{
        minWidth: `${isSmallWindow ? "272px" : "400px"}`,
      }}
    >
      <div
        className={`transition-all flex justify-between py-4 z-10 px-3 lg:px-6 ${
          isCategoryTopVisible
            ? "rounded-t-xl"
            : "sticky w-full top-0 shadow shadow-main rounded-b-lg"
        }`}
        style={{ backgroundColor: "#E9E3D5" }}
      >
        <div className=" flex text-main items-center gap-2 cursor-default">
          <div
            className={` w-2 h-2 rounded-full `}
            style={{ backgroundColor: `${accentColor}` }}
          ></div>
          <span
            className={`text-lg font-semibold capitalize ${stickyCategoryTopStyle}`}
          >
            {title}
          </span>
          <div
            className={`w-6 h-6 rounded-full flex text-sm items-center justify-center bg-cat ${stickyCategoryTopStyle}`}
          >
            {tasksNumber}
          </div>
        </div>
        <div
          className={`w-6 h-6 rounded-lg bg-cat flex items-center justify-center ${stickyCategoryTopStyle} cursor-pointer`}
          style={{ backgroundColor: "rgba(37, 27, 55, 0.2)" }}
        >
          <Icon icon={"lets-icons:add-round"} />
        </div>
      </div>
      <hr
        ref={categoryTop}
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
