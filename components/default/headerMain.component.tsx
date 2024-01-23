import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function HeaderMain() {
  const [erp, setErp] = useState(true);
  return (
    <>
      <div className=" w-full  justify-between px-10 bg-main items-center xl:flex lg:flex  hidden">
        <div className=" flex gap-8 items-center">
          <img
            src="/images/lightlogo.png"
            style={{ width: "45px", height: "30px" }}
          />
          <div className=" flex xl:gap-4 lg:gap-4 gap-1 text-white xl:text-md lg:text-md text-sm">
            <span className="py-4 px-4">Dashboard</span>
            <span className="py-4 px-4 bg-selected text-selectedText">
              Project management
            </span>
            <span className="py-4 px-4">HR</span>
          </div>
        </div>
        <div className=" flex gap-7 items-center ">
          <div className=" flex text-white xl:text-md lg:text-md text-sm py-1 px-1 rounded-2xl items-center bg-main3">
            <button
              onClick={() => setErp(!erp)}
              className={` px-5 w-fit ${erp ? "bg-light" : ""} rounded-xl`}
            >
              ERP
            </button>
            <button
              onClick={() => setErp(!erp)}
              className={` px-5 w-fit ${!erp ? "bg-light" : ""} rounded-xl`}
            >
              Community
            </button>
          </div>
          <Icon
            icon={"iconamoon:search-thin"}
            className=" text-white text-xl"
          />
          <Icon
            icon={"clarity:notification-line"}
            className=" text-white text-xl"
          />
          <Icon icon={"carbon:settings"} className=" text-white text-xl" />
          <Icon icon={"icons8:todo-list"} className=" text-white text-xl" />
          <img
            src="/images/loginPage.jpg"
            className="rounded-full"
            style={{ width: "40px", height: "35px" }}
          />
        </div>
      </div>
      <div className=" w-full justify-between md:px-10 px-2 py-2 bg-main items-center xl:hidden lg:hidden flex">
        <div className=" flex gap-4">
          <Icon icon={"bi:list"} className=" text-white text-3xl" />
          <img
            src="/images/lightlogo.png"
            style={{ width: "45px", height: "30px" }}
          />
        </div>
        <div className=" flex items-center gap-4">
          <div className=" flex text-white xl:text-md lg:text-md text-sm  py-1 px-1 rounded-3xl items-center bg-main3">
            <button
              className={` px-4 w-fit py-2 ${
                erp ? "bg-light" : ""
              } rounded-3xl`}
              onClick={() => setErp(!erp)}
            >
              <Icon
                icon={"icon-park-outline:system"}
                className=" text-xl text-white"
              />
            </button>
            <button
              className={` px-4 w-fit py-2 ${
                !erp ? "bg-light" : ""
              } rounded-3xl`}
              onClick={() => setErp(!erp)}
            >
              <Icon
                icon={"fluent:people-community-48-regular"}
                className=" text-xl text-white"
              />
            </button>
          </div>
          <Icon
            icon={"iconamoon:search-light"}
            className=" text-white text-2xl"
          />
          <img
            src="/images/loginPage.jpg"
            className="rounded-full"
            style={{ width: "40px", height: "35px" }}
          />
        </div>
      </div>
    </>
  );
}
