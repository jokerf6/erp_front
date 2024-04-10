import TasksHeightStore from "@/store/taskssHeight";
import { useEffect, useState } from "react";
import useMousePosition from "./mousePotion";
import { Tasks } from "@/static/tasks";

function useDragAndDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentId, setCurrentId] = useState("");
  const { TaskSHeight, UpdateTaskSHeight, EmptyTaskSHeight } =
    TasksHeightStore();
  const handleDragStart = (e: any) => {
    setIsDragging(true);
    const offsetX = e.clientX;
    const offsetY = e.clientY;
    setPosition({ x: offsetX, y: offsetY });
  };
  const { mousePosition } = useMousePosition();

  const handleDragEnd = (e: any, categories: any, setCategories: any) => {
    setIsDragging(false);
    const { top, bottom, left, right } = e.target.getBoundingClientRect();

    if (
      currentId !== "" &&
      e.clientX >= left &&
      e.clientX <= right &&
      e.clientY >= top &&
      e.clientY <= bottom
    ) {
      document.getElementById(currentId)!.style.marginTop = "0px";
    } else {
      // get Categories
      const currentCategory = categories.filter(
        (item: any) =>
          item.tasks.filter((task: any) => task.id === e.target.id)[0]
      )[0];
      const targetCategory = categories.filter(
        (item: any) =>
          item.tasks.filter((task: any) => task.id === currentId)[0]
      )[0];

      // get Tasks
      if (!currentCategory || !targetCategory || currentId === e.target.id) {
        e.target.style.transform = `translate(0px,0px)`;

        return;
      }

      const targetTask = targetCategory.tasks.filter(
        (item: any) => item.id === currentId
      );
      const insertedTask = currentCategory.tasks.filter(
        (item: any) => item.id === e.target.id
      );
      // get index of tasks
      const indexToInsertBefore = targetCategory.tasks.indexOf(targetTask[0]);
      const indexToPop = currentCategory.tasks.indexOf(insertedTask[0]);

      if (indexToInsertBefore !== -1) {
        currentCategory.tasks.splice(indexToPop, 1);

        targetCategory.tasks.splice(indexToInsertBefore, 0, insertedTask[0]);

        const cat = [...categories];
        const indexOfCurrentCategory = categories.indexOf(currentCategory.id);
        const indexOfTargetCategory = categories.indexOf(targetCategory.id);
        cat[indexOfCurrentCategory] = currentCategory;
        cat[indexOfTargetCategory] = targetCategory;
        setCategories([...cat]);

        for (let i = 0; i < Tasks.length; i++) {
          if (window) {
            document.getElementById(Tasks[i].id)!.style.marginTop = "0px";
            document.getElementById(
              Tasks[i].id
            )!.style.transform = `translate(${0}px, ${0}px)`;
          }
        }
      }
    }
  };

  const handleDrag = (e: any, taskId: string, cardRef: any) => {
    e.preventDefault();
    if (isDragging) {
      const offsetX = e.clientX - position.x;
      const offsetY = e.clientY - position.y;
      e.target.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      // console.log(e.clientX, mousePosition.y);
      // console.log(TaskSHeight[0]);
      for (let i = 0; i < Tasks.length; i++) {
        const { top, bottom, left, right } = document
          .getElementById(Tasks[i].id)!
          .getBoundingClientRect();
        // console.log(top, left, bottom, right, Tasks[i].id);
        const Task = {
          id: Tasks[i].id,
          top,
          bottom,
          left,
          right,
        };
        if (
          // taskId !== TaskSHeight[i].id &&
          e.clientX >= Task.left &&
          e.clientX <= Task.right &&
          e.clientY >= Task.top &&
          e.clientY <= Task.bottom
        ) {
          //
          if (window) {
            if (taskId !== Tasks[i].id) {
              setCurrentId(Tasks[i].id);

              document.getElementById(Tasks[i].id)!.style.marginTop =
                e.target.clientHeight + "px";
            }
          }
        }
      }
    }
  };

  return { isDragging, handleDragStart, handleDragEnd, handleDrag };
}

export default useDragAndDrop;
