import React from "react";
export default function TaskChecked() {
  const status = ["To Do", "In Progress", "Done"];
  return (
    <div className=" flex gap-4">
      <div className="container">
        <div className="round">
          <input type="checkbox" checked id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
      </div>
      <span className=" text-white">todo</span>
    </div>
  );
}
