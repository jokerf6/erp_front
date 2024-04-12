import React from "react";
// Functions
import getTaskPriorityColors from "@/functions/getTaskPriorityColors";

export default function TaskPriority(props: { priority: string }) {
  return (
    <div
      className={`${getTaskPriorityColors(
        props.priority
      )} rounded-lg px-4 py-1 capitalize`}
    >
      {props.priority}
    </div>
  );
}
