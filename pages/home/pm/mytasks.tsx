"use client";
import React, { useState, useContext, createContext, useMemo } from "react";

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

// Layout, Context
import HomeLayout, { HomeContext } from "@/layouts/home";
import { Tasks } from "@/static/tasks";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import Task from "@/components/tasks/task.component";
const MyTasksContext = createContext({} as any);
export { MyTasksContext };
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetTasks } from "@/services/getTasks";
import { getCookie } from "cookies-next";

export default function MyTasks() {
  const queryClient = useQueryClient();
  const { isLoading } = useQuery({
    queryKey: ["getTasks"],
    queryFn: () => GetTasks(getCookie("AccessToken")!, setTasks),
    enabled: true,
  });

  // use states
  const { isSmallWindow } = useContext(HomeContext);
  const [categories, setCategories] = React.useState(categoriesData.data);
  const [editTaskOverlay, setEditTaskOverlay] = React.useState(false);
  const [addComment, setAddComment] = React.useState(false);
  const [addTaskOverlay, setAddTaskOverlay] = useState(false);
  const [imageSliderOverlay, setImageSliderOverlay] = useState(false);
  const [imageSlider, setImageSlider] = useState([] as any);
  const [selectedSliderImage, setSelectedSliderImage] = useState(Number);
  const [categoryFilter, setCategoryFilter] = useState(categories[0].title);
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = React.useState(false);
  const [task, setTask] = React.useState<any>();

  // Drag

  const [tasks, setTasks] = useState<any>(Tasks);
  const [activeColumn, setActiveColumn] = useState<any>(null);
  const [activeTask, setActiveTask] = useState<any>(null);
  const [columns, setColumns] = useState<any>(categories);
  const columnsId = useMemo(() => columns.map((col: any) => col.id), [columns]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  // hooks
  useScrollBlockHook(editTaskOverlay);
  useScrollBlockHook(addTaskOverlay);
  useScrollBlockHook(imageSliderOverlay);

  // function handleImageSliderOverlay(
  //   categoryID: any,
  //   taskID: any,
  //   imageID: any
  // ) {
  //   categories[categoryID - 1].tasks.map((task:any) => {
  //     if (task.id === taskID) {
  //       setImageSlider(task.images);
  //       setSelectedSliderImage(imageID);
  //     }
  //   });
  //   setImageSliderOverlay(true);
  // }

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

  const categoryElements = columns.map((category: any, idx: number) => {
    return (
      <Category
        key={category.id}
        category={category}
        setTask={setTask}
        tasks={tasks.filter((item: any) => item["status"] === category.id)}
      />
    );
  });
  const categoryElementsFiltered = categoryElements.filter(
    (element: any) => element.props.title === categoryFilter
  );

  return (
    <MyTasksContext.Provider
      value={{
        // handleImageSliderOverlay,
        categories,
        setAddTaskOverlay,
        setEditTaskOverlay,
      }}
    >
      <Head>
        <title>ERP | Project Management</title>
      </Head>
      <div className=" ">
        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
        >
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
            <SortableContext items={columnsId}>
              {isSmallWindow ? categoryElementsFiltered : categoryElements}
            </SortableContext>
          </div>
          {typeof window !== "undefined" &&
            createPortal(
              <DragOverlay>
                {activeColumn && (
                  <Category
                    category={activeColumn}
                    setTask={setTask}
                    tasks={Tasks.filter(
                      (item: any) => item["category"] === activeColumn.id
                    )}
                  />
                )}
                {activeTask && (
                  <Task
                    taskID={activeTask.id}
                    categoryID={activeTask.category}
                    task={activeTask}
                  />
                )}
              </DragOverlay>,
              document.body
            )}
        </DndContext>
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
          task={task}
        />
      )}

      {addTaskOverlay && (
        <AddTask setAddTaskOverlay={setAddTaskOverlay} display={true} />
      )}
    </MyTasksContext.Provider>
  );

  function onDragStart(event: DragStartEvent) {
    console.log("Drag start Event Triggered"); // Debugging statement
    console.log("---------------------");
    console.log(event.active.data.current?.type);
    console.log(event.active.data.current?.category);

    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.category);
      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;
    console.log("Drag End Event Triggered"); // Debugging statement
    console.log(active.data.current);
    const isActiveAColumn = active.data.current?.type === "Column";
    if (!isActiveAColumn) return;

    console.log("DRAG END");
    console.log(overId);
    setColumns((columns: any) => {
      const activeColumnIndex = columns.findIndex(
        (col: any) => col.id === activeId
      );
      console.log(activeColumnIndex);
      const overColumnIndex = columns.findIndex(
        (col: any) => col.id === overId
      );
      console.log(overColumnIndex);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;
    console.log("------------------------------");
    console.log(activeId);
    console.log(overId);

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks: any) => {
        const activeIndex = tasks.findIndex((t: any) => t.id === activeId);
        const overIndex = tasks.findIndex((t: any) => t.id === overId);

        if (tasks[activeIndex].status != tasks[overIndex].status) {
          // Fix introduced after video recording
          tasks[activeIndex].status = tasks[overIndex].status;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";
    console.log(isOverAColumn);
    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks: any) => {
        const activeIndex = tasks.findIndex((t: any) => t.id === activeId);

        tasks[activeIndex].status = overId;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }
}

MyTasks.PageLayout = HomeLayout;
