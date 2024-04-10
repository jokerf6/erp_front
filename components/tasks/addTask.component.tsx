import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PriorityData } from "@/static/parioty";
import FormItem from "../sider/SiderForm/FormItem/FormItem.component";

// Components
import Modal from "../default/modal.component";
import Sider from "@/components/sider/Sider.component";
import DropDown from "../sider/inputs/dropDown.input.component";
import AssignedToInput from "@/components/sider/inputs/assignedTo.input.component";
import SiderForm from "../sider/SiderForm/SiderForm.component";
import UploadFiles from "../sider/inputs/uploadFiles.input.component";


export default function AddTask(props: {
  setAddTaskOverlay?: any;
  display?: boolean;
}) {
  const { setAddTaskOverlay } = props;
  const [ProjectsData, setProjectsData] = useState([]);
  const [projectId, setProjectId] = React.useState("eID");
  const [priorityName, setPriorityName] = React.useState("eName");
  const [files, setFiles] = useState<any>([]);
  useEffect(() => {
    // getTask();
  }, []);

  return (
    <Modal setOverlay={setAddTaskOverlay}>
      <ToastContainer />
      <Sider>
        <Sider.Header setOverlay={setAddTaskOverlay}>Add New Task</Sider.Header>
        <SiderForm>
          <SiderForm.Container>
            <FormItem>
              <div className="flex gap-2">
                <FormItem.Label>Task Name</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </div>
              <FormItem.Input type="text" title="Task Name" placeholder="Enter Task Name" />
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItem.Label>Project Name</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
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
                <FormItem.Label>Assigned To </FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </div>
              <AssignedToInput />
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItem.Label>Due Date</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </div>
              <FormItem.Input type="datetime-local" placeholder="Set due date" />
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItem.Label>Files</FormItem.Label>
                <FormItem.Priority>Optional</FormItem.Priority>
              </div>
              <UploadFiles files={files} setFiles={setFiles} />
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItem.Label>Priority</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </div>
              <DropDown
                data={PriorityData}
                name="priority"
                click={setPriorityName}
              />
            </FormItem>

            <FormItem>
              <div className="flex gap-2">
                <FormItem.Label>Description</FormItem.Label>
                <FormItem.Priority>Optional</FormItem.Priority>
              </div>
              <textarea
                name="description"
                className="block text-[14px] pr-[32px] appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Write task details"
              />
            </FormItem>
          </SiderForm.Container>
          <Sider.Button>Add</Sider.Button>
        </SiderForm>
      </Sider>
    </Modal>
  );
}
