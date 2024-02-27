import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Icon } from "@iconify/react";

import useScrollBlock from "@/functions/useScrollBlock";

// Context
import { HomeContext } from "@/layouts/home";
import ErpComm from "./erpComm.component";

export default function Header() {
  const { isSmallWindow } = useContext(HomeContext);
  const router = useRouter();
  const path = router.pathname.split("/");
  const homeCurrentTab = path[2];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // NavLinks Styles
  const navLinkStyle =
    "capitalize cursor-pointer p-4 hover:bg-nav-selected-bg hover:text-nav-selected-text";
  const navLinkStyleActive =
    "bg-nav-selected-bg text-nav-selected-text font-bold";
  const navLinkStyleInActive = "bg-primary-purple text-lite-white";
  const navLinkStyleSmallWindow = isSmallWindow
    ? "shadow-[0_0_2px_1px_rgba(255,255,255,0.2)] rounded-sm"
    : "";
  // NavLinks Styles

  // NavIcons Styles
  const navIconStyleSmallWindow =
    "bg-lite-white text-primary-purple flex gap-2 p-2 items-center rounded-sm";
  const navIconStyle = "text-2xl cursor-pointer box-content p-1";
  // NavIcons Styles

  // Makes sure The Menu is always open in Big Screens
  useEffect(() => {
    setIsMenuOpen(window.innerWidth < 1024 ? false : true);
  }, [isSmallWindow]);

  // Block/Allow Scrolling when Opening/Closing Menu
  const [blockScroll, allowScroll] = useScrollBlock();
  useEffect(() => {
    if (isMenuOpen && isSmallWindow) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-primary-purple flex px-5 py-3 lg:py-0 relative justify-between">
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
            className="text-lite-white text-2xl lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        )}
        <nav
          className={`bg-primary-purple/95 h-[100vh] ${
            isMenuOpen ? "absolute" : "hidden"
          } z-[3] top-full left-0 w-full flex flex-col p-2 gap-2 lg:p-0 lg:static lg:h-fit`}
        >
          <ul className="flex flex-col gap-3 lg:flex-row">
            <Link href={"/home/dashboard"}>
              <li
                className={`${navLinkStyle} ${navLinkStyleSmallWindow} ${
                  homeCurrentTab === "dashboard"
                    ? navLinkStyleActive
                    : navLinkStyleInActive
                }`}
              >
                dashboard
              </li>
            </Link>
            <Link href={"/home/pm/mytasks"}>
              <li
                className={`${navLinkStyle} ${navLinkStyleSmallWindow} ${
                  homeCurrentTab === "pm"
                    ? navLinkStyleActive
                    : navLinkStyleInActive
                }`}
              >
                project management
              </li>
            </Link>
            <Link href={"/home/hr"}>
              <li
                className={`${navLinkStyle} ${navLinkStyleSmallWindow} ${
                  homeCurrentTab === "hr"
                    ? navLinkStyleActive
                    : navLinkStyleInActive
                }`}
              >
                HR
              </li>
            </Link>
          </ul>
          {isSmallWindow && (
            <div className="lg:hidden">
              <hr />
              <div className="header--right small flex flex-col gap-2 overflow-y-auto">
                <ErpComm />
                <div className={navIconStyleSmallWindow}>
                  <Icon icon="mi:notification" className="text-2xl" />
                  <span>Notifications</span>
                </div>
                <div className={navIconStyleSmallWindow}>
                  <Icon icon="solar:settings-linear" className="text-2xl" />
                  <span>Settings</span>
                </div>
                <div className={navIconStyleSmallWindow}>
                  <Icon icon={"icons8:todo-list"} className="text-2xl " />
                  <span>To Do List</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      <div className="header--right flex items-center gap-4 text-lite-white">
        {!isSmallWindow && (
          <div className="hidden lg:block">
            <ErpComm />
          </div>
        )}
        <Icon icon="teenyicons:search-outline" className={navIconStyle} />
        {!isSmallWindow && (
          <div className="hidden lg:flex gap-3">
            <Icon icon="mi:notification" className={navIconStyle} />
            <Icon icon="solar:settings-linear" className={navIconStyle} />
            <Icon icon={"icons8:todo-list"} className={navIconStyle} />
          </div>
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
