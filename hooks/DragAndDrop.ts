import TasksHeightStore from "@/store/taskssHeight";
import { useEffect, useState } from "react";
import useMousePosition from "./mousePotion";

function useDragAndDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentId, setCurrentId] = useState("");
  const { TaskSHeight, UpdateTaskSHeight } = TasksHeightStore();
  const handleDragStart = (e: any) => {
    setIsDragging(true);
    const offsetX = e.clientX;
    const offsetY = e.clientY;
    setPosition({ x: offsetX, y: offsetY });
  };
  const { mousePosition } = useMousePosition();

  const handleDragEnd = (e: any) => {
    setIsDragging(false);
    if (currentId === "") {
    }
    e.target.style.transform = `translate(${0}px, ${0}px)`;
  };

  const handleDrag = (e: any, taskId: string, cardRef: any) => {
    e.preventDefault();
    if (isDragging) {
      const offsetX = e.clientX - position.x;
      const offsetY = e.clientY - position.y;
      e.target.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      // console.log(e.clientX, mousePosition.y);
      // console.log(TaskSHeight[0]);
      for (let i = 0; i < TaskSHeight.length; i++) {
        if (
          // taskId !== TaskSHeight[i].id &&
          e.clientX >= TaskSHeight[i].left &&
          e.clientX <= TaskSHeight[i].right &&
          e.clientY >= TaskSHeight[i].top &&
          e.clientY <= TaskSHeight[i].bottom
        ) {
          //
          if (window) {
            if (currentId !== taskId) {
              if (currentId !== "") {
                document.getElementById(currentId)!.style.marginTop = "0px";
              }
              setCurrentId(TaskSHeight[i].id);
              if (taskId !== TaskSHeight[i].id) {
                document.getElementById(TaskSHeight[i].id)!.style.marginTop =
                  e.target.clientHeight + "px";
              }
            }
          }
          // console.log(cardRef.current.clientHeight);
          // console.log(offsetX, offsetY);
        }
        // console.log(TaskSHeight);
      }
    }
  };

  return { isDragging, handleDragStart, handleDragEnd, handleDrag };
}

export default useDragAndDrop;
