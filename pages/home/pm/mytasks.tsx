import React, { useState, useContext } from "react";

import { Icon } from "@iconify/react";

import categoriesData from "@/utils/category.json";

import Head from "next/head";

// Components
import Category from "@/components/tasks/category.component";
import TaskChecked from "@/components/tasks/Slider/taskStatus.component";
import TitleTask from "@/components/tasks/Slider/titleTask.component";
import EditTask from "@/components/editTask/editTask.component";
import Inputs from "@/components/editTask/Inputs";
// Layout
import PMLayout from "@/layouts/pm";

// Context
import { HomeContext } from "@/layouts/home";

export default function MyTasks() {
  const { isSmallWindow, windowWidth } = useContext(HomeContext);

  const [categories, setCategories] = React.useState(categoriesData.data);
  const [categoryFilter, setCategoryFilter] = useState(categories[0].title);
  const [isOpen, setIsOpen] = React.useState(false);
  const [editTask , setEditTask] = React.useState(false);
  // TODO: To be removed ?
  const [overlay, setOverlay] = useState(false);
  // TODO: To be removed ?
  const [taskDetails, setTaskDetails] = useState(false);

  const [passinput, setPassInput] = useState(false);

  const categoryFilterList = categories.map((category) => {
    return (
      <div
        key={category.title}
        id={category.title}
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

  const categoryElements = categories.map((category) => {
    return (
      <Category
        key={category.id}
        title={category.title}
        category={category}
        setPassInput={setPassInput}
        setEditTask ={setEditTask}
      />
    );
  });
  const categoryElementsFiltered = categoryElements.filter(
    (element) => element.props.title === categoryFilter
  );

  return (
    <>
    {(passinput || editTask) && <div className=" absolute top-0 left-0 bg-black opacity-80 w-full h-full z-20"></div>}
      <Head>
        <title>ERP | Project Management</title>
      </Head>
      {editTask && <EditTask close={setEditTask}/>}
      {passinput && <Inputs close={setPassInput} />}
      <div>
        <div className="flex justify-center mt-10">
          {isSmallWindow && (
            <div className="flex flex-col justify-center items-center w-11/12 rounded relative">
              <button
                className="bg-main3 text-white2 shadow-sm shadow-main3 font-semibold w-full rounded-t relative py-1"
                onClick={handleDropdown}
              >
                <span className="capitalize">{categoryFilter}</span>
                <span className="absolute top-1/2 right-4 -translate-y-1">
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
      {/* {overlay && (
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
      )} */}
    </>
  );
}

MyTasks.PageLayout = PMLayout;
