import React, { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PriorityData } from "@/static/parioty";
import { Projects_Link } from "@/static/links";

// Components
import Modal from "../default/modal.component";
import DropDown from "../default/dropDown.component";
import Input from "@/components/tasks/Slider/input.component";
import AssignedToInput from "@/components/sider/inputs/assignedTo.input.component";
import Sider from "@/components/sider/sider.component";

export default function AddTask(props: {
  setAddTaskOverlay?: any;
  display?: boolean;
}) {
  const { setAddTaskOverlay } = props;
  const [ProjectsData, setProjectsData] = useState([]);
  const [projectId, setProjectId] = React.useState("eID");
  const [priorityName, setPriorityName] = React.useState("eName");
  useEffect(() => {
    // getTask();
  }, []);
  // Function That When Click it Click input Filed With type File
  const fileInputRef = useRef<HTMLInputElement>(null);
  function ClickInputFile() {
    fileInputRef.current?.click();
  }
  const [files, setFiles] = useState<any>([]);

  return (
    <Modal setOverlay={setAddTaskOverlay}>
      <ToastContainer />
      <Sider>
        <div className="head p-[20px]  bg-[#FFFFFF] flex justify-between items-center shadow-[0px_1px_10.1px_rgba(0,0,0,0.1)]">
          <h1 className="font-[600] text-[#251B37]  text-[22px] ">
            Add new task
          </h1>
          <Icon
            icon="gg:close-r"
            className="text-[1.5rem] cursor-pointer"
            onClick={() => setAddTaskOverlay(false)}
          />
        </div>
        <form
          // onSubmit={postTask}
          className="inputs-container bg-[#FAFAFA] flex flex-col flex-1"
        >
          <div className="inputs-content flex flex-col gap-5 p-[20px]">
            <Input type="text" name="taskAsm" title="Task Name" />

            {props.display && (
              <DropDown
                data={ProjectsData}
                title="Project Name"
                name="project"
                default="Please Select Your Project"
                click={setProjectId}
              />
            )}

            <div className="input-3 flex flex-col gap-1">
              <label
                className="text-[#251B37] text-[14px] font-[500]"
                htmlFor="assigned"
              >
                Assigned to
                <span className="text-[14px] font-[400] text-[red]">
                  {" "}
                  (Required)
                </span>{" "}
              </label>

              <AssignedToInput />
            </div>

            <Input type="datetime-local" name="dueDate" title="Due Date" />

            <div className="input-5 flex flex-col gap-1">
              <label
                className="text-[#251B37] text-[14px] font-[500]"
                htmlFor="file"
              >
                Files{" "}
                <span className="text-[400] text-[14px] text-[green] ">
                  (Optional)
                </span>
              </label>
              <button
                type="button"
                className=" flex justify-between  text-[14px] pr-[10px] appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-[10px]  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onClick={ClickInputFile}
              >
                <input
                  required
                  ref={fileInputRef}
                  style={{ visibility: "hidden" }}
                  type="file"
                  className=" w-[0px] h-[0px] hidden"
                  id="file"
                  // TODO: fix the error in input file
                  onChange={(e) => {
                    setFiles([...files, e.target.files![0].name]);
                  }}
                  placeholder="Upload files"
                />
                <span>Choose Files</span>
                <Icon icon="subway:pin" className="-rotate-45  text-[14px]" />
              </button>
              <div className="flex flex-col gap-4">
                {files.length > 0 &&
                  files.map((item: any, idx: number) => {
                    return (
                      <div className="part-two flex justify-between items-center">
                        <div className="part-one flex items-center gap-4">
                          <Icon
                            icon={"solar:folder-with-files-linear"}
                            className=" text-4xl"
                          />
                          <p>{item}</p>
                        </div>
                        <Icon
                          icon="lucide:import"
                          className="text-primary-pink w-[21px] h-[21px] cursor-pointer"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>

            <DropDown
              data={PriorityData}
              title="Priority"
              name="priority"
              default="Please task priority"
              click={setPriorityName}
            />

            <div className="input-7 flex flex-col gap-1">
              <label
                className="text-[#251B37] text-[14px] font-[500]"
                htmlFor="description"
              >
                Description{" "}
                <span className="text-[14px] font-[400] text-[green] ">
                  (Optional)
                </span>
              </label>
              <textarea
                name="description"
                className="block text-[14px] pr-[32px] appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Write task details"
              />
            </div>
          </div>
          <div className="p-5 shadow-[0px_1px_10.1px_rgba(0,0,0,0.1)] bg-[#FFFFFF] flex justify-center items-center w-full">
            <button
              type="submit"
              className="bg-gradient-purple-btn text-[1.5rem] flex-1 text-[#FFFFFF]  rounded-[5px] py-[5px]"
            >
              Add
            </button>
          </div>
        </form>
      </Sider>
    </Modal>
  );
}
