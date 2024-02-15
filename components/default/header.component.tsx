import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Icon } from "@iconify/react";

// Functions
import useScrollBlock from "@/functions/useScrollBlock";

// Context
import { HomeContext } from "@/layouts/home";
import ErpComm from "./erpComm.component";

export default function Header() {
  const { isSmallWindow, blockScroll, allowScroll } = useContext(HomeContext);

  const router = useRouter();
  const path = router.pathname.split("/");
  const homeCurrentTab = path[2];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeHomeTabStyle = "bg-selected text-selectedText font-bold";

  // Makes sure The Menu is always open in Big Screens
  useEffect(() => {
    setIsMenuOpen(isSmallWindow ? false : true);
  }, [isSmallWindow]);

  // Block/Allow Scrolling when Opening/Closing Menu
  useEffect(() => {
    if (isMenuOpen && isSmallWindow) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-main flex px-5 py-3 lg:py-0 relative justify-between">
      <div className="header--left flex gap-4 items-center flex-row-reverse lg:flex-row">
        <Link href={"/home/pm/mytasks"}>
          <Image
            src={"/images/lightlogo.png"}
            alt={"ERP-Logo"}
            width={60}
            height={30}
          />
        </Link>
        {isSmallWindow && (
          <Icon
            icon="mingcute:menu-line"
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        )}
        <nav
          className={`bg-[rgba(37,27,55,0.95)] ${
            isMenuOpen ? "absolute" : "hidden"
          } z-[3] top-full left-0 w-full flex flex-col p-2 gap-2 lg:p-0 lg:static lg:h-fit`}
          style={{ height: isSmallWindow ? "calc(100vh - 51.2px)" : "" }}
        >
          <ul className="flex flex-col gap-3 lg:flex-row">
            <Link href={"/home/dashboard"}>
              <li
                className={`bg-main capitalize cursor-pointer p-4 hover:bg-selected hover:text-selectedText ${
                  homeCurrentTab === "dashboard"
                    ? activeHomeTabStyle
                    : "text-white"
                } ${
                  isSmallWindow &&
                  "shadow-[0_0_2px_1px_rgba(255,255,255,0.2)] rounded-sm"
                }`}
              >
                dashboard
              </li>
            </Link>
            <Link href={"/home/pm/mytasks"}>
              <li
                className={`bg-main capitalize cursor-pointer p-4 hover:bg-selected hover:text-selectedText ${
                  homeCurrentTab === "pm" ? activeHomeTabStyle : "text-white"
                } ${
                  isSmallWindow &&
                  "shadow-[0_0_2px_1px_rgba(255,255,255,0.2)] rounded-sm"
                }`}
              >
                project management
              </li>
            </Link>
            <Link href={"/home/hr"}>
              <li
                className={`bg-main uppercase cursor-pointer p-4  hover:bg-selected hover:text-selectedText ${
                  homeCurrentTab === "hr" ? activeHomeTabStyle : "text-white"
                } ${
                  isSmallWindow &&
                  "shadow-[0_0_2px_1px_rgba(255,255,255,0.2)] rounded-sm"
                }`}
              >
                hr
              </li>
            </Link>
          </ul>
          {isSmallWindow && (
            <>
              <hr />
              <div className="header--right small flex flex-col gap-2 overflow-y-scroll">
                <ErpComm />
                <div className="bg-white2 text-main flex gap-2 p-2 items-center rounded-sm">
                  <Icon icon="mi:notification" className="text-2xl" />
                  <span>Notifications</span>
                </div>
                <div className="bg-white2 text-main flex gap-2 p-2 items-center rounded-sm">
                  <Icon icon="solar:settings-linear" className="text-2xl" />
                  <span>Settings</span>
                </div>
                <div className="bg-white2 text-main flex gap-2 p-2 items-center rounded-sm">
                  <Icon icon={"icons8:todo-list"} className=" text-2xl " />
                  <span>To Do List</span>
                </div>
              </div>
            </>
          )}
        </nav>
      </div>
      <div className="header--right flex items-center gap-4 text-white">
        {!isSmallWindow && <ErpComm />}
        <Icon
          icon="teenyicons:search-outline"
          className="text-2xl cursor-pointer box-content p-1"
        />
        {!isSmallWindow && (
          <>
            <Icon
              icon="mi:notification"
              className="text-2xl cursor-pointer box-content p-1"
            />
            <Icon
              icon="solar:settings-linear"
              className="text-2xl cursor-pointer box-content p-1"
            />
            <Icon
              icon={"icons8:todo-list"}
              className=" text-2xl cursor-pointer box-content p-1"
            />
          </>
        )}
        <Image
          src="/images/Kerolos Fayez.jpg"
          alt="user--profile-image"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}
