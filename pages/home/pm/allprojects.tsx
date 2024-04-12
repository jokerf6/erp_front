import React from "react";

import { Icon } from "@iconify/react";

import Head from "next/head";

// Components
import Card from "@/components/tasks/All Projects/Card.component";
import EditAllProject from "@/components/tasks/All Projects/EditAllProject.component";
import InputField from "@/components/tasks/All Projects/InputField.component";
import PartTaskAllProject from "@/components/tasks/All Projects/PartTaskAllProject.component";
import useScrollBlockHook from "@/hooks/useScrollBlock";
import AddTask from "@/components/tasks/addTask.component";
import Modal from "@/components/default/modal.component";
import Sider from "@/components/sider/Sider.component";

// Layout
import HomeLayout from "@/layouts/home";
import FormItem from "@/components/sider/SiderForm/FormItem/FormItem.component";
import AssignedToInput from "@/components/sider/inputs/assignedTo.input.component";
import Description from "@/components/sider/inputs/Description";

export default function AllProjects() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [addNewProjectIsOpen, setAddNewProjectIsOpen] = React.useState(false);
  const [seeAllIsOpen, setSeeAllIsOpen] = React.useState(false);
  const [addNewTask, setAddNewTask] = React.useState(false);
  const [projectData, setProjectData] = React.useState({
    progress: 0,
    name: "",
    people: [],
    files: 0,
    task: [],
  });

  // To prevent scrolling the body
  useScrollBlockHook(isOpen);
  useScrollBlockHook(addNewProjectIsOpen);
  useScrollBlockHook(seeAllIsOpen);
  useScrollBlockHook(addNewTask);

  // Function to Get progress and name of project
  function getData(
    progress: number,
    name: string,
    people: any,
    files: number,
    task: any
  ) {
    setProjectData({ progress, name, people, files, task });
  }

  // pass The type of each input
  const myInputs = ["text", "date"];
  const myData = [
    {
      id: 1,
      project: "project 1",
      progress: 20,
      files: 5,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1,
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2,
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3,
        },
      ],
      tasks: [],
    },
    {
      id: 2,
      project: "project 2",
      progress: 40,
      files: 20,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1,
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2,
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3,
        },
      ],
      tasks: [
        {
          id: 1,
          priority: "Low",
          condition: "in progress",
          EndDate: "Due date  12 Jan. 2023",
          StartDate: "Created at  12 Jan. 2023 10:12 AM",
          title: "Task one",
          files: 5,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
        {
          id: 2,
          priority: "High",
          condition: "in progress",
          EndDate: "Due date  12 Jan. 2023",
          StartDate: "Created at  12 Jan. 2023 10:12 AM",
          title: "Task two",
          files: 6,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
      ],
    },
    {
      id: 3,
      project: "project 3",
      progress: 60,
      files: 5,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1,
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2,
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3,
        },
      ],
      tasks: [
        {
          id: 1,
          priority: "Low",
          condition: "in progress",
          EndDate: "Due date  12 Jan. 2023",
          StartDate: "Created at  12 Jan. 2023 10:12 AM",
          title: "Task one",
          files: 5,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
      ],
    },
    {
      id: 4,
      project: "project 4",
      progress: 80,
      files: 5,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1,
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2,
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3,
        },
      ],
      tasks: [
        {
          id: 1,
          priority: "Low",
          condition: "in progress",
          EndDate: "Due date  12 Jan. 2023",
          StartDate: "Created at  12 Jan. 2023 10:12 AM",
          title: "Task one",
          files: 5,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
        {
          id: 2,
          priority: "High",
          condition: "in progress",
          EndDate: "Due date  12 Jan. 2023",
          StartDate: "Created at  12 Jan. 2023 10:12 AM",
          title: "Task two",
          files: 6,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
        {
          id: 3,
          priority: "Medium",
          condition: "Done",
          title: "Task Three",
          files: 5,
          comments: 20,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
        {
          id: 4,
          priority: "Low",
          condition: "Done",
          title: "Task four",
          files: 5,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
      ],
    },
    {
      id: 5,
      project: "project 5",
      progress: 100,
      files: 500,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1,
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2,
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3,
        },
        {
          name: "Ayten",
          jobTitle: "UI/UX",
          image: "/images/woman.png",
          position: "Member",
          id: 4,
        },
      ],
      tasks: [
        {
          id: 1,
          priority: "Low",
          condition: "in progress",
          EndDate: "Due date  12 Jan. 2023",
          StartDate: "Created at  12 Jan. 2023 10:12 AM",
          title: "Task one",
          files: 5,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
        {
          id: 2,
          priority: "High",
          condition: "in progress",
          EndDate: "Due date  12 Jan. 2023",
          StartDate: "Created at  12 Jan. 2023 10:12 AM",
          title: "Task two",
          files: 6,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
        {
          id: 3,
          priority: "Medium",
          condition: "Done",
          title: "Task Three",
          files: 5,
          comments: 20,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
        {
          id: 4,
          priority: "Low",
          condition: "Done",
          title: "Task four",
          files: 5,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
        {
          id: 5,
          priority: "Low",
          condition: "in progress",
          EndDate: "Due date  12 Jan. 2023",
          StartDate: "Created at  12 Jan. 2023 10:12 AM",
          title: "Task five",
          files: 15,
          comments: 10,
          images: [
            "/images/Kerolos Fayez.jpg",
            "/images/Matthew Adel.jpg",
            "/images/Sheta.png",
          ],
        },
      ],
    },
  ];

  const myTasks = projectData.task.map((data: any) => {
    return (
      <PartTaskAllProject
        id={data.id}
        key={data.id}
        priority={data.priority}
        condition={data.condition}
        files={data.files}
        comments={data.comments}
        title={data.title}
        images={data.images}
        startDate={data.StartDate}
        endDate={data.EndDate}
      />
    );
  });

  const myCards = myData.map((data) => {
    return (
      <Card
        key={data.id}
        name={data.project}
        id={data.id}
        files={data.files}
        photo={data.photo}
        progress={data.progress}
        closeBig={setIsOpen}
        getData={() =>
          getData(
            data.progress,
            data.project,
            data.photo,
            data.files,
            data.tasks
          )
        }
      />
    );
  });
  return (
    <div className="p-[25px] ">
      <Head>
        <title>ERP | All Projects</title>
      </Head>
      {isOpen && (
        <EditAllProject
          cardName={projectData.name}
          cardProgress={projectData.progress}
          cardPeople={projectData.people}
          cardFiles={projectData.files}
          cardTasks={projectData.task}
          openSeeAll={setSeeAllIsOpen}
          closSeeAllParent={setIsOpen}
          addNewTask={setAddNewTask}
        />
      )}

      {addNewProjectIsOpen && (
        <Modal setOverlay={setAddNewProjectIsOpen}>
          <Sider>
            <Sider.Header.Add setOverlay={setAddNewProjectIsOpen}>
              Add new Project
            </Sider.Header.Add>

            <Sider.Form>
              <Sider.Form.Container>
                <FormItem>
                  <FormItem.LabelPriority>
                    <FormItem.Label>Project Name</FormItem.Label>
                    <FormItem.Priority>Required</FormItem.Priority>
                  </FormItem.LabelPriority>
                  <FormItem.Input
                    type="text"
                    name="Project Name"
                    placeholder="Enter project name"
                  />
                </FormItem>

                <FormItem>
                  <FormItem.LabelPriority>
                    <FormItem.Label>Client Name</FormItem.Label>
                    <FormItem.Priority>Required</FormItem.Priority>
                  </FormItem.LabelPriority>
                  <select
                    name="Client Name"
                    id="clientName"
                    className="border-[1px] border-[#251B37] rounded-md h-10 w-full"
                  >
                    <option value="">Choose Project Client</option>
                  </select>
                </FormItem>

                <FormItem>
                  <FormItem.LabelPriority>
                    <FormItem.Label>team members</FormItem.Label>
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
                    type="date"
                    name="Due Date"
                    placeholder="Set due date"
                  />
                </FormItem>

                <FormItem>
                  <FormItem.LabelPriority>
                    <FormItem.Label>Description</FormItem.Label>
                    <FormItem.Priority>optional</FormItem.Priority>
                  </FormItem.LabelPriority>
                  <Description>Write project details</Description>
                </FormItem>
              </Sider.Form.Container>
              <Sider.Button>add</Sider.Button>
            </Sider.Form>
          </Sider>
        </Modal>
      )}

      {seeAllIsOpen && (
        <Modal setOverlay={setSeeAllIsOpen}>
          <Sider>
            <div
              className="head p-[20px]  bg-[#FFFFFF] flex justify-between items-center shadow-[0px_1px_10.1px_rgba(0,0,0,0.1)]"
              onClick={() => setSeeAllIsOpen(false)}
            >
              <h1 className="font-bold text-[#251B37]  text-[1.5rem] ">
                Add new task
              </h1>
              <Icon
                icon="gg:close-r"
                className="text-[1.5rem] cursor-pointer"
              />
            </div>
            <div className="bg-[#FAFAFA] p-10">
              <div className="flex gap-4 justify-end">
                <button
                  className="text-[#FF375E] font-semibold"
                  onClick={() => setAddNewTask(true)}
                >
                  Add new task
                </button>
                <Icon
                  icon={"lets-icons:add-round"}
                  className="w-6 h-6  bg-[#FF375E]/20 rounded-lg cursor-pointer text-[#FF375E]"
                />
              </div>
              <div className="">{myTasks}</div>
            </div>
          </Sider>
        </Modal>
      )}

      {addNewTask && (
        <AddTask display={false} setAddTaskOverlay={setAddNewTask} />
      )}
      <div className="page-content flex flex-col md:p-[40px] p-[10px] gap-8  bg-[#E9E3D58A] rounded-xl">
        <div className="part-One flex justify-between flex-col xls:flex-row gap-4">
          <div className="flex  items-center gap-4 ">
            <h1 className="font-bold text-[1.5rem]">All projects</h1>
            <Icon
              icon={"lets-icons:add-round"}
              className="w-6 h-6  bg-[#251B37]/20 rounded-lg cursor-pointer"
              onClick={() => setAddNewProjectIsOpen(true)}
            />
          </div>
          <div className="bg-[#FFFFFF] rounded-2xl  p-2 flex gap-4 justify-between items-center">
            <input
              type="text"
              placeholder="Search For Project"
              className="text-[#3F3849] indent-2 border-none focus:outline-none"
            />
            <Icon icon="ion:search-outline" className="text-[1.5rem]" />
          </div>
        </div>
        <div className="part-Two grid grid-cols-[repeat(auto-fill,minmax(0,400px))] md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 lg:justify-between">
          {myCards}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#251B37] font-bold">Page 1</p>
          <p className=" w-fit">Not Completed Part</p>
        </div>
      </div>
    </div>
  );
}

AllProjects.PageLayout = HomeLayout;
