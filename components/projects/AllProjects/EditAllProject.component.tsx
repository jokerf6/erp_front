import React from "react";
import Files from "@/components/tasks/editTask/Files";
import TasksAllProject from "./TasksAllProject.component";
import Modal from "@/components/default/modal.component";
import Sider from "@/components/sider/sider.component";
import CreatedAt from "@/components/sider/SiderEdit/CreatedAt";
import { Icon } from "@iconify/react";
import Title from "@/components/sider/SiderEdit/Title";
import DueDate from "@/components/sider/SiderEdit/DueDate";
import Brief from "@/components/sider/SiderEdit/Brief";
import ProjectProgress from "./ProjectProgress";
export default function EditAllProject(props: {
  cardName: string;
  cardProgress: number;
  cardPeople: object[];
  cardFiles: number;
  cardTasks: any;
  openSeeAll: any;
  closSeeAllParent: any;
  addNewTask: any;
}) {
  return (
    <Modal setOverlay={props.closSeeAllParent}>
      <Sider>
        <Sider.Header.Edit>
          <div className="flex justify-between items-center">
            <CreatedAt>2024-04-09T21:29:06.446Z</CreatedAt>
            <button>
              <Icon icon={"tabler:dots"} className="text-2xl cursor-pointer" />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <Title>{props.cardName}</Title>
          </div>

          <DueDate>2024-04-15T21:29:06.446Z</DueDate>

          <Brief>
            Create test cases for old APIs in tasks module in pages 1,2,3 and 4
          </Brief>

          <ProjectProgress cardProgress={props.cardProgress} />
        </Sider.Header.Edit>

        {/* <Files files={props.cardFiles} /> */}
        <TasksAllProject
          tasks={props.cardTasks}
          seeAll={props.openSeeAll}
          closSeeAllParent={props.closSeeAllParent}
          openAddNewTask={props.addNewTask}
        />
        {/* <Teammates cardPeople={props.cardPeople} /> */}
      </Sider>
    </Modal>
  );
}
