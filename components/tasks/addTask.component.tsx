import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PriorityData } from "@/static/parioty";

// Components
import Modal from "../default/modal.component";
import FormItem from "../sider/SiderForm/FormItem/FormItem.component";
import DropDown from "../sider/inputs/dropDown.input.component";
import AssignedToInput from "@/components/sider/inputs/assignedTo.input.component";
import UploadFiles from "../sider/inputs/uploadFiles.input.component";
import Description from "../sider/inputs/Description";
import Sider from "../sider/sider.component";

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
        <Sider.Header.Add setOverlay={setAddTaskOverlay}>
          Add New Task
        </Sider.Header.Add>
        <Sider.Form>
          <Sider.Form.Container>
            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Task Name</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </FormItem.LabelPriority>
              <FormItem.Input
                type="text"
                name="Task Name"
                placeholder="Enter Task Name"
              />
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Project Name</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </FormItem.LabelPriority>
              {props.display && (
                <DropDown
                  data={ProjectsData}
                  name="Project Name"
                  click={setProjectId}
                />
              )}
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Assigned To </FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </FormItem.LabelPriority>
              <AssignedToInput />
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Due Date</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </FormItem.LabelPriority>
              <FormItem.Input
                type="datetime-local"
                placeholder="Set due date"
              />
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Files</FormItem.Label>
                <FormItem.Priority>Optional</FormItem.Priority>
              </FormItem.LabelPriority>
              <UploadFiles files={files} setFiles={setFiles} />
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Priority</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </FormItem.LabelPriority>
              <DropDown
                data={PriorityData}
                name="priority"
                click={setPriorityName}
              />
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Description</FormItem.Label>
                <FormItem.Priority>Optional</FormItem.Priority>
              </FormItem.LabelPriority>
              <Description>write task details</Description>
            </FormItem>
          </Sider.Form.Container>
          <Sider.Button>Add</Sider.Button>
        </Sider.Form>
      </Sider>
    </Modal>
  );
}
