import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Modal from "../default/modal.component";
import { PriorityData } from "@/static/parioty";
import DropDown from "../default/dropDown.component";
import { Projects_Link, Tasks_Links } from "@/static/links";
import Input from '@/components/tasks/Slider/input.component'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddTask(props: { setAddTaskOverlay?: any, display?: boolean }) {
  const { setAddTaskOverlay } = props;
  const [ProjectsData, setProjectsData] = useState([]);
  const [projectId, setProjectId] = React.useState("eID")
  const [priorityName, setPriorityName] = React.useState("eName");
  useEffect(() => {
    getTask();
  }, []);
  // Function That When Click it Click input Filed With type File
  const fileInputRef = useRef<HTMLInputElement>(null);
  function ClickInputFile() {
    fileInputRef.current?.click()
  }
  const [files, setFiles] = useState([]);

  return (
    <Modal setOverlay={setAddTaskOverlay}>
      <ToastContainer />
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 right-0 min-h-screen w-screen max-w-[600px] md:w-[50vw] z-[21] flex flex-col justify-center"
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
        <form onSubmit={postTask} className="inputs-container bg-[#FAFAFA] flex flex-col flex-1 p-[20px]">
          <div className="inputs-content flex flex-col gap-5 ">
            <Input
              type="text"
              name="taskAsm"
              title="Task Name"
            />

            {props.display && <DropDown
              data={ProjectsData}
              title="Project Name"
              name="project"
              default="Please Select Your Project"
              click={setProjectId}
            />}

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

            <Input
              type="datetime-local"
              name="dueDate"
              title="Due Date"
            />

            <div className="input-5 flex flex-col gap-1">
              <label className='text-[#251B37] text-[1rem] font-medium' htmlFor="file">Files <span className='text-[0.8rem] text-[green] '>(Optional)</span></label>
              <button className='rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px] flex justify-between items-center' onClick={ClickInputFile}>
                <input
                  required
                  ref={fileInputRef}
                  style={{ visibility: "hidden" }}
                  type="file"
                  className="  w-[0px]"
                  id="file"
                  // TODO: fix the error in input file
                  onChange={(e) => { setFiles([...files, e.target.files![0].name]); }}
                  placeholder="Upload files"
                />
                <Icon icon="subway:pin" className='-rotate-45 mr-[5px]' />
              </button>
              <div className="flex flex-col gap-4">
                {files.length > 0 &&
                  files.map((item: any, idx: number) => {
                    return (
                      <div className="part-two flex justify-between items-center">
                        <div className="part-one flex items-center gap-4">
                          <Icon icon={"solar:folder-with-files-linear"} className=" text-4xl" />
                          <p>{item}</p>
                        </div>
                        <Icon icon="lucide:import" className="text-primary-pink w-[21px] h-[21px] cursor-pointer" />
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
                className="text-[#251B37] text-[1rem] font-medium"
                htmlFor="description"
              >
                Description{" "}
                <span className="text-[0.8rem] text-[green] ">(Optional)</span>
              </label>
              <textarea
                name="description"
                className=" rounded-[5px] py-[10px] outline-none  border-[#251B37] border-[1px] indent-[10px] h-[40px] max-h-[100px] min-h-[100px] mb-20"
                id="description"
                placeholder="Write task details"
              />
            </div>

          </div>
          <div className=" absolute bottom-0 left-0  p-5 shadow-[0px_1px_10.1px_rgba(0,0,0,0.1)] bg-[#FFFFFF] flex justify-center items-center mt-[20px] w-full">
            <button type="submit" className="bg-gradient-to-r from-[#5A28B3] to-[#E2778C] text-[1.5rem] flex-1 text-[#FFFFFF]  rounded-[5px] py-[5px]">
              Add
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
  // Function That Convert Time to Time fahd 3awzo
  function convertTime(originalDateTimeString: any) {
    var originalDate = new Date(originalDateTimeString);

    // Adjust the date by subtracting 1 day
    originalDate.setDate(originalDate.getDate());

    // Set the time to 00:45:33.753
    // originalDate.setHours(0);
    // originalDate.setMinutes(45);
    // originalDate.setSeconds(33);
    // originalDate.setMilliseconds(753);

    // Convert the adjusted date to ISO string format with UTC timezone indicator
    var adjustedDateTimeString = originalDate.toISOString();
    return adjustedDateTimeString
  }
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

  // Fetch Data using Post method
  async function postTask(e: any) {
    e.preventDefault();
    console.log(priorityName, "<== priority is ")
    const data = {
      "name": e.target.taskAsm.value,
      "projectId": projectId,
      "AssigneesId": [
      ],
      "dueData": convertTime(e.target.dueDate.value),
      "description": e.target.description.value,
      "priority": priorityName
    }
    console.log(data);
    if (priorityName === "" || projectId === "") {
      const notify = async (error: string) => toast.error(error);
      return notify("Fe Error Ya Cos omk");
    }
    await fetch(Tasks_Links, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("AccessToken")}`
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}
