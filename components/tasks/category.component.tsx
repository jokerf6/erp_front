import { Icon } from "@iconify/react";
import React from "react";
import Task from "./task.component";

export default function Category(props: {
  setOverlay: any;
  title: string;
  tasksNumber: number;
  accentColor: string;
}) {
  const { setOverlay, title, tasksNumber, accentColor } = props;

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

  const [isSmallWindow, setIsSmallWindow] = React.useState(false);
  React.useEffect(() => {
    setIsSmallWindow(window.innerWidth < 1024 ? true : false);
  }, []);

  return (
    <div
      className=" flex flex-col bg-cat rounded-xl h-fit flex-1"
      style={{
        backgroundColor: "#E9E3D58A",
        minWidth: `${isSmallWindow ? "272px" : "400px"}`,
      }}
    >
      <div
        className={`transition-all flex justify-between py-4 z-50 px-3 lg:px-6 ${
          isCategoryTopVisible
            ? ""
            : "sticky w-full top-0 bg-white2 shadow shadow-main rounded-b-lg"
        }`}
      >
        <div className=" flex text-main items-center gap-2">
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
          className={`w-6 h-6 rounded-lg bg-cat flex items-center justify-center ${stickyCategoryTopStyle}`}
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
        <Task setOverlay={setOverlay} />
        <Task setOverlay={setOverlay} />
        <Task setOverlay={setOverlay} />
        <Task setOverlay={setOverlay} />
      </div>
    </div>
  );
}
