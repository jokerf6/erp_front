import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Modal from "../default/modal.component";
import { PriorityData } from "@/static/parioty";
import DropDown from "../default/dropDown.component";
import { Projects_Link } from "@/static/links";

export default function AddTask(props: { setAddTaskOverlay: any }) {
  const { setAddTaskOverlay } = props;
  const [ProjectsData, setProjectsData] = useState([]);
  useEffect(() => {
    getTask();
  }, []);
  return (
    <Modal setOverlay={setAddTaskOverlay}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 right-0 min-h-screen w-screen max-w-[600px] md:w-[50vw] z-[100] flex flex-col justify-center"
      >
        <div className="head p-[20px]  bg-[#FFFFFF] flex justify-between items-center shadow-[0px_1px_10.1px_rgba(0,0,0,0.1)]">
          <h1 className="font-bold text-[#251B37]  text-[1.5rem] ">
            Add new task
          </h1>
          <Icon
            icon="gg:close-r"
            className="text-[1.5rem] cursor-pointer"
            onClick={() => setAddTaskOverlay(false)}
          />
        </div>
        <form className="inputs-contanier bg-[#FAFAFA] flex flex-col flex-1 p-[20px]">
          <div className="inputs-content flex flex-col gap-5 ">
            <div className="input-1 flex flex-col gap-1">
              <label
                className="text-[#251B37] text-[1rem] font-medium"
                htmlFor="taskName"
              >
                Task Name{" "}
                <span className="text-[0.8rem] text-[red]"> (Required)</span>
              </label>
              <input
                name="taskName"
                required
                type="text"
                className=" rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px]"
                id="taskName"
                placeholder="Enter task name"
              />
            </div>

            <DropDown
              data={ProjectsData}
              title="Project Name"
              name="project"
              default="Please Select Your Project"
            />

            <div className="input-3 flex flex-col gap-1">
              <label
                className="text-[#251B37] text-[1rem] font-medium"
                htmlFor="assigned"
              >
                Assigned to
                <span className="text-[0.8rem] text-[red]">
                  {" "}
                  (Required)
                </span>{" "}
              </label>
              <input
                required
                name="assigned"
                type="text"
                className=" rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px]"
                id="assigned"
                placeholder="Enter The Name of Teammates"
              />
            </div>
            <div className="input-4 flex flex-col gap-1">
              <label
                className="text-[#251B37] text-[1rem] font-medium"
                htmlFor="dueDate"
              >
                Due Date{" "}
                <span className="text-[0.8rem] text-[red]"> (Required)</span>
              </label>
              <input
                required
                name="dueDate"
                type="date"
                className=" rounded-[5px]  border-[#251B37] border-[1px] indent-[5px] h-[40px]"
                id="dueDate"
                placeholder="Set due Date"
              />
            </div>
            <DropDown
              data={PriorityData}
              title="Priority"
              name="priority"
              default="Please task priority"
            />
            <div className="input-7 flex flex-col gap-1">
              <label
                className="text-[#251B37] text-[1rem] font-medium"
                htmlFor="description"
              >
                Description{" "}
                <span className="text-[0.8rem] text-[green] ">(Optional)</span>
              </label>
              <textarea
                name="description"
                className=" rounded-[5px] py-[10px] outline-none  border-[#251B37] border-[1px] indent-[10px] h-[40px] max-h-[100px] min-h-[100px]"
                id="description"
                placeholder="Write task details"
              />
            </div>
          </div>
          <div className="bg-[#FFFFFF] flex justify-center items-center mt-[20px] w-full">
            <button className="bg-gradient-to-r from-[#5A28B3] to-[#E2778C] text-[1.5rem] flex-1 text-[#FFFFFF]  rounded-[5px] py-[5px]">
              Add
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );

  // Fetch data using GET method and headers
  async function getTask() {
    const headers = new Headers();
    headers.append(
      "Authorization",
      `Bearer ${localStorage.getItem("AccessToken")}`
    );
    await fetch(Projects_Link, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        return response.json(); // Parse response body as JSON
      })
      .then((data) => {
        setProjectsData(data.data);
        // console.log("Data:", data); // Process the data
      });
  }
}
