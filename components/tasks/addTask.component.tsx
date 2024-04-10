import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PriorityData } from "@/static/parioty";
import FormItem from "../sider/FormItem.component";

// Components
import Modal from "../default/modal.component";
import DropDown from "../default/dropDown.component";
import Input from "@/components/tasks/Slider/input.component";
import AssignedToInput from "@/components/sider/inputs/assignedTo.input.component";
import Sider from "@/components/sider/sider.component";
import FormItemLabel from "../sider/FormItemLabel.component";
import FormItemPriority from "../sider/FormItemPriority.component";
import FormItemInput from "../sider/FormItemInput.component";
import SiderForm from "../sider/SiderForm.component";
import SiderFormContainer from "../sider/SiderFormContainer";

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
        <Sider.Header setOverlay={setAddTaskOverlay}>Add New Task</Sider.Header>
        <SiderForm>
          <SiderFormContainer>
            <FormItem>
              <div className="flex gap-2">
                <FormItemLabel>Task Name</FormItemLabel>
                <FormItemPriority>Required</FormItemPriority>
              </div>
              <FormItemInput type="text" title="Task Name" placeholder="Enter Task Name" />
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItemLabel>Project Name</FormItemLabel>
                <FormItemPriority>Required</FormItemPriority>
              </div>
              {props.display && (
                <DropDown
                  data={ProjectsData}
                  name="project"
                  click={setProjectId}
                />
              )}
            </FormItem>


            <FormItem>
              <div className="flex gap-2">
                <FormItemLabel>Assigned To </FormItemLabel>
                <FormItemPriority>Required</FormItemPriority>
              </div>
              <AssignedToInput />
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItemLabel>Due Date</FormItemLabel>
                <FormItemPriority>Required</FormItemPriority>
              </div>
              <FormItemInput type="datetime-local" placeholder="Set due date" />
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItemLabel>Files</FormItemLabel>
                <FormItemPriority>Optional</FormItemPriority>
              </div>
              <div className="input-5 flex flex-col gap-1">
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
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItemLabel>Priority</FormItemLabel>
                <FormItemPriority>Required</FormItemPriority>
              </div>
              <DropDown
                data={PriorityData}
                name="priority"
                click={setPriorityName}
              />
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItemLabel>Description</FormItemLabel>
                <FormItemPriority>Optional</FormItemPriority>
              </div>
              <textarea
                name="description"
                className="block text-[14px] pr-[32px] appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Write task details"
              />
            </FormItem>

          </SiderFormContainer>
          <Sider.Button>Add</Sider.Button>
        </SiderForm>

      </Sider>
    </Modal>
  );
}
