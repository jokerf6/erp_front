import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PriorityData } from "@/static/priority";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddTaskRequest } from "@/services/addTask";
import { getCookie } from "cookies-next";
import { GetProjects } from "@/services/getProjects";

// Components
import Modal from "../default/modal.component";
import FormItem from "../sider/SiderForm/FormItem/FormItem.component";
import DropDown from "../sider/inputs/dropDown.input.component";
import AssignedToInput from "@/components/sider/inputs/assignedTo.input.component";
import UploadFiles from "../sider/inputs/uploadFiles.input.component";
import Description from "../sider/inputs/Description";
import Sider from "../sider/Sider.component";

export default function AddTask(props: {
  setAddTaskOverlay?: any;
  display?: boolean;
}) {
  const { setAddTaskOverlay } = props;

  const [projectsData, setProjectsData] = useState<any>([]);
  const queryClient = useQueryClient();
  const { isLoading } = useQuery({
    queryKey: ["getProjects"],
    queryFn: () => GetProjects(getCookie("AccessToken")!, setProjectsData),
    enabled: true,
  });

  useEffect(() => {
    // getTask();
  }, []);

  const [addTaskForm, setAddTaskForm] = useState({
    name: "", // done
    projectId: "", // done
    AssigneesId: [],
    dueData: "2024-04-17T16:32:57.215Z",
    priority: "", // done
    description: "", //done
    files: [], // half done?
  });
  // console.log("addTaskForm: ", addTaskForm);

  const notify = async (error: string) => toast.error(error);

  const mutation = useMutation({
    mutationFn: (addTaskForm: any) => {
      return AddTaskRequest(
        addTaskForm,
        notify,
        getCookie("AccessToken")!,
        setAddTaskOverlay
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTasks"] });
    },
  });

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
                name="name"
                placeholder="Enter Task Name"
                formEntry={addTaskForm.name}
                handleChange={handleFormChange}
              />
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Project Name</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </FormItem.LabelPriority>
              {props.display && (
                <DropDown
                  data={projectsData}
                  name="projectId"
                  handleChange={handleFormChange}
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
                name="dueData"
                placeholder="Set due date"
              />
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Files</FormItem.Label>
                <FormItem.Priority>Optional</FormItem.Priority>
              </FormItem.LabelPriority>
              <UploadFiles setAddTaskForm={setAddTaskForm} />
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Priority</FormItem.Label>
                <FormItem.Priority>Required</FormItem.Priority>
              </FormItem.LabelPriority>
              <DropDown
                data={PriorityData}
                name="priority"
                handleChange={handleFormChange}
              />
            </FormItem>

            <FormItem>
              <FormItem.LabelPriority>
                <FormItem.Label>Description</FormItem.Label>
                <FormItem.Priority>Optional</FormItem.Priority>
              </FormItem.LabelPriority>
              <Description
                formEntry={addTaskForm.description}
                handleChange={handleFormChange}
              >
                write task details
              </Description>
            </FormItem>
          </Sider.Form.Container>
          <Sider.Button handleSubmit={handleFormSubmit}>Add</Sider.Button>
        </Sider.Form>
      </Sider>
    </Modal>
  );

  function handleFormChange(e: any) {
    const { name, value } = e.target;
    setAddTaskForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();
    mutation.mutate(addTaskForm);
  }
}
