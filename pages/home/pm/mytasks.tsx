import React, { useState, useContext, createContext } from "react";

import { Icon } from "@iconify/react";

import categoriesData from "@/utils/category.json";

import Head from "next/head";
// Components
import Category from "@/components/tasks/category.component";
import EditTask from "@/components/tasks/editTask/editTask.component";
import AddTask from "@/components/tasks/addTask.component";
import ImageSlider from "@/components/tasks/imageSlider.component";
import AddComment from "@/components/tasks/editTask/addComment";

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

  const [editTaskOverlay, setEditTaskOverlay] = React.useState(false);
  const [addComment, setAddComment] = React.useState(false);

  const [addTaskOverlay, setAddTaskOverlay] = useState(false);
  const [imageSliderOverlay, setImageSliderOverlay] = useState(false);
  useScrollBlockHook(editTaskOverlay);
  useScrollBlockHook(addTaskOverlay);
  useScrollBlockHook(imageSliderOverlay);

  const [imageSlider, setImageSlider] = useState([] as any);
  const [selectedSliderImage, setSelectedSliderImage] = useState(Number);

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
  // Function to get task data
  const [taskData, setTaskData] = React.useState({
    category: "",
    priority: "",
    taskName: "",
    comments: 0,
    files: 0,
    image: [],
  });
  function getDate(
    category: string,
    priority: string,
    taskName: string,
    comments: number,
    files: number,
    image: any
  ) {
    setTaskData({ category, priority, taskName, comments, files, image });
  }
  const categoryFilterList = categories.map((category) => {
    return (
      <div
        key={category.title}
        id={category.title}
        className="bg-lite-white capitalize rounded-sm py-1 shadow-[0px_0px_2px_0px] shadow-secondary-purple"
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

  const categoryElements = categories.map((category, idx: number) => {
    return (
      <Category
        id={`cat${idx}`}
        key={category.id}
        title={category.title}
        category={category}
        categories={categories}
        setCategories={setCategories}
        getData={getDate}
      />
    );
  });
  const categoryElementsFiltered = categoryElements.filter(
    (element) => element.props.title === categoryFilter
  );
  console.log(taskData);
  return (
    <MyTasksContext.Provider
      value={{
        handleImageSliderOverlay,
        categories,
        setAddTaskOverlay,
        setEditTaskOverlay,
      }}
    >
      <Head>
        <title>ERP | Project Management</title>
      </Head>

      <div>
        <div className="flex justify-center mt-10">
          {isSmallWindow && (
            <div className="flex flex-col justify-center items-center w-11/12 rounded relative">
              <button
                className="bg-secondary-purple text-lite-white shadow-sm shadow-secondary-purple font-semibold w-full rounded-t relative py-1"
                onClick={handleDropdown}
              >
                <span className="capitalize">{categoryFilter}</span>
                <span className="absolute top-1/2 right-4 -translate-y-1">
                  <Icon
                    icon={`bxs:${
                      isCategoryFilterOpen ? "up-arrow" : "down-arrow"
                    }`}
                    width={10}
                  />
                </span>
              </button>
              {isCategoryFilterOpen && (
                <div className="bg-primary-white border-secondary-purple flex flex-col gap-2 text-center w-full py-2 px-1 absolute top-full z-[2] rounded-sm border-[1px]">
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

      {addComment && <AddComment setAddComment={setAddComment} />}
      {editTaskOverlay && (
        <EditTask
          setEditTaskOverlay={setEditTaskOverlay}
          setAddComment={setAddComment}
          addComment={addComment}
          taskCategory={taskData.category}
          taskName={taskData.taskName}
          taskPriority={taskData.priority}
          taskComments={taskData.comments}
          taskFiles={taskData.files}
          taskImages={taskData.image}
        />
      )}

      {addTaskOverlay && <AddTask setAddTaskOverlay={setAddTaskOverlay} display = {true} />}
    </MyTasksContext.Provider>
  );
}

MyTasks.PageLayout = PMLayout;
