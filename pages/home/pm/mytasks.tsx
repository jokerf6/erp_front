import React, { useState, useContext } from "react";

import { Icon } from "@iconify/react";

import categoryData from "@/utils/category.json";

import Head from "next/head";

// Components
import Category from "@/components/tasks/category.component";
import TaskChecked from "@/components/tasks/Slider/taskStatus.component";
import TitleTask from "@/components/tasks/Slider/titleTask.component";
import EditTask from "@/components/editTask/editTask.component";

// Layout
import PMLayout from "@/layouts/pm";

// Context
import { HomeContext } from "@/layouts/home";
import ErpComm from "@/components/default/erpComm.component";

export default function MyTasks() {
  const { isSmallWindow } = useContext(HomeContext);
  const [overlay, setOverlay] = useState(false);
  const [taskDetails, setTaskDetails] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("to do");
  const [isOpen, setIsOpen] = React.useState(false);

  const categoryFilterList = categoryData.data.map((category) => {
    return (
      <div
        key={category.title}
        className="bg-white2 capitalize rounded-sm py-1"
        style={{ boxShadow: "0 0 2px var(--color-main3)" }}
        onClick={() => {
          setCategoryFilter(category.title);
          setIsOpen(false);
        }}
      >
        {category.title}
      </div>
    );
  });
  function handleDropdown() {
    setIsOpen(!isOpen);
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

      {/* <EditTask /> */}

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
                    icon={`bxs:${isOpen ? "up-arrow" : "down-arrow"}`}
                    width={10}
                  />
                </span>
              </button>
              {isOpen && (
                <div
                  className="bg-white border-main3 flex flex-col gap-2 text-center w-full py-2 px-1 absolute top-full z-[2] rounded-sm"
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
  );
}

MyTasks.PageLayout = PMLayout;
