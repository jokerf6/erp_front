import React, { useState, useContext, createContext } from "react";

import { Icon } from "@iconify/react";

import categoriesData from "@/utils/category.json";

import Head from "next/head";
import Image from "next/image";

// Components
import Category from "@/components/tasks/category.component";
import TaskChecked from "@/components/tasks/Slider/taskStatus.component";
import TitleTask from "@/components/tasks/Slider/titleTask.component";
import EditTask from "@/components/editTask/editTask.component";
import Inputs from "@/components/editTask/Inputs";
import ImageSlider from "@/components/tasks/imageSlider.component";

// Hook
import useScrollBlockHook from "@/hooks/useScrollBlock";

// Layout
import PMLayout from "@/layouts/pm";

// Context
import { HomeContext } from "@/layouts/home";
const MyTasksContext = createContext({} as any);
export { MyTasksContext };

export default function MyTasks() {
  const { isSmallWindow } = useContext(HomeContext);

  const [categories, setCategories] = React.useState(categoriesData.data);
  const [categoryFilter, setCategoryFilter] = useState(categories[0].title);
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = React.useState(false);
  const [passinput, setPassInput] = useState(false);

  const [imageSliderOverlay, setImageSliderOverlay] = useState(false);
  const [imageSlider, setImageSlider] = useState([] as any);
  const [selectedSliderImage, setSelectedSliderImage] = useState(Number);

  useScrollBlockHook(imageSliderOverlay);

  function handleImageSliderOverlay(
    categoryID: any,
    taskID: any,
    imageID: any
  ) {
    categories[categoryID - 1].tasks.map((task) => {
      if (task.id === taskID) {
        setImageSlider(task.images);
        setSelectedSliderImage(imageID);
      }
    });
    setImageSliderOverlay(true);
  }

  const categoryFilterList = categories.map((category) => {
    return (
      <div
        key={category.title}
        id={category.title}
        className="bg-white2 capitalize rounded-sm py-1"
        style={{ boxShadow: "0 0 2px var(--color-main3)" }}
        onClick={() => {
          setCategoryFilter(category.title);
          setIsCategoryFilterOpen(false);
        }}
      >
        {category.title}
      </div>
    );
  });
  function handleDropdown() {
    setIsCategoryFilterOpen(!isCategoryFilterOpen);
  }

  const categoryElements = categories.map((category) => {
    return (
      <Category
        key={category.id}
        title={category.title}
        category={category}
        setPassInput={setPassInput}
      />
    );
  });
  const categoryElementsFiltered = categoryElements.filter(
    (element) => element.props.title === categoryFilter
  );

  return (
    <MyTasksContext.Provider value={{ handleImageSliderOverlay, categories }}>
      <Head>
        <title>ERP | Project Management</title>
      </Head>
      {/* <EditTask /> */}
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
                    icon={`bxs:${isCategoryFilterOpen ? "up-arrow" : "down-arrow"}`}
                    width={10}
                  />
                </span>
              </button>
              {isCategoryFilterOpen && (
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
      {imageSliderOverlay && (
        <ImageSlider
          setImageSliderOverlay={setImageSliderOverlay}
          imageSlider={imageSlider}
          selectedSliderImage={selectedSliderImage}
          setSelectedSliderImage={setSelectedSliderImage}
        />
      )}
    </MyTasksContext.Provider>
  );
}

MyTasks.PageLayout = PMLayout;
