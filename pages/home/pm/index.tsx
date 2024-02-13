import React, { useState } from "react";

import { Icon } from "@iconify/react";

import categoryData from "@/utils/category.json";

import Head from "next/head";
import { useRouter } from 'next/router'

// Components
import HeaderMain2 from "@/components/default/headerMain2.component";
import Taps from "@/components/default/taps.component";
import TaskStatus from "@/components/default/taskStatus.component";
import Category from "@/components/tasks/category.component";
import TaskChecked from "@/components/tasks/Slider/taskStatus.component";
import TitleTask from "@/components/tasks/Slider/titleTask.component";
import File from '@/components/PM/Files'
import Comments from '@/components/PM/Comments'
import Teammates from '@/components/PM/Teammates'

// Layout
import HomeLayout from '@/layouts/home'

export default function MyTasks() {
  const router = useRouter()
  const path = router.pathname.split("/")
  console.log(path[path.length - 1])


  const [overlay, setOverlay] = useState(false);
  const [taskDetails, setTaskDetails] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("to do");
  const [open, setOpen] = React.useState(false);

  const [isSmallWindow, setIsSmallWindow] = React.useState(false);
  React.useEffect(() => {
    setIsSmallWindow(window.innerWidth < 1024 ? true : false);
  }, []);

  const categoryFilterList = categoryData.data.map((category) => {
    return (
      <div
        key={category.title}
        className="bg-white2 capitalize rounded-sm py-1"
        style={{ boxShadow: "0 0 5px var(--color-main3)" }}
        onClick={() => {
          setCategoryFilter(category.title);
          setOpen(false);
        }}
      >
        {category.title}
      </div>
    );
  });
  function handleDropdown() {
    setOpen(!open);
  }

  const categoryElements = categoryData.data.map((category) => {
    return (
      <Category
        key={category.title}
        setOverlay={setOverlay}
        title={category.title}
        tasksNumber={category.tasksNumber}
        accentColor={category.accentColor}
        isSmallWindow={isSmallWindow}
      />
    );
  });
  const categoryElementsFiltered = categoryElements.filter(
    (element) => element.props.title === categoryFilter
  );

  return (
    <>
      <Head>
        <title>ERP | Project Management</title>
      </Head>
      <div className="flex flex-col gap-5">
        {/* Start Side bar  */}
        <div className="bg-[#FAFAFA] absolute right-0 w-2/6 h-fit z-20 p-[20px] flex flex-col gap-5">
          <div className="first-part  flex flex-col gap-4">
            <h3 className="self-end">Created At 12 jan 2023 10:12 AM</h3>
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-[#251B37] text-[1.5rem]">Create Text Cases - Project Name </h1>
              <p className="text-[#D58D49] bg-[rgba(223,168,116,0.2)] rounded-lg px-4 py-1">Low </p>
            </div>
            <h2 className="text-[#FF375E] font-bold">To be Done in 12 jan 2023</h2>
            <p className="text-[#787486]">Create test cases for old APIs in tasks module in pages 1,2,3 and 4  </p>
            <div className="task-container grid grid-cols-3">
              <div className="flex gap-2">
                <input type="radio" className="" name = "status" />
                <label htmlFor="">To Do</label>
              </div>
              <div className="flex gap-4">
                <input type="radio" className="" name = "status" />
                <label htmlFor="">in Progress</label>
              </div>
              <div className="flex gap-4">
                <input type="radio" className="" name = "status" />
                <label htmlFor="">Done</label>
              </div>
            </div>
          </div>
          <File />
          <Comments />
          <Teammates />
        </div>
        {/* End Side bar */}
        <HeaderMain2 />
        <Taps />
      </div>
      <div>
        <div className="flex justify-center mt-10">
          {isSmallWindow && (
            <div className="flex flex-col justify-center items-center w-11/12 rounded relative">
              <button
                className="bg-main3 text-white2 shadow-sm shadow-main3 font-semibold w-full rounded-t relative py-1"
                onClick={handleDropdown}
              >
                <span className="capitalize">{categoryFilter}</span>
                <span className="absolute top-1/2 right-2 -translate-y-1">
                  <Icon
                    icon={`bxs:${open ? "up-arrow" : "down-arrow"}`}
                    width={10}
                  />
                </span>
              </button>
              {open && (
                <div
                  className="bg-white border-main3 flex flex-col gap-2 text-center w-full pt-2 absolute top-full z-20"
                  style={{ borderWidth: "1px" }}
                >
                  {categoryFilterList}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-4 p-6 lg:px-10 lg:py-6  flex-col lg:flex-row flex-wrap">
          {isSmallWindow ? categoryElementsFiltered : categoryElements}
        </div>
      </div>
      {overlay && (
        <div className=" absolute w-screen h-screen flex items-center justify-center top-0 left-0 bg-black bg-opacity-50">
          <div className=" bg-white p-4 w-1/2">
            <div className=" w-full flex justify-between items-center">
              <span className=" text-main">Task Images</span>{" "}
              <span
                className=" text-red-500 cursor-pointer"
                onClick={() => setOverlay(false)}
              >
                x
              </span>
            </div>
            <div className=" flex gap-2 items-center">
              <Icon
                icon={"ep:arrow-left-bold"}
                className=" text-2xl cursor-pointer"
              />

              <img
                src="/images/loginPage.png"
                className=" w-full"
                style={{ height: "50vh" }}
              />
              <Icon
                icon={"ep:arrow-right-bold"}
                className=" text-2xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
      {taskDetails && (
        <div className=" absolute w-screen h-screen flex items-center justify-center top-0 left-0 bg-black bg-opacity-50">
          <TitleTask />
          <TaskChecked />
        </div>
      )}
    </>
  )
}

MyTasks.PageLayout = HomeLayout
