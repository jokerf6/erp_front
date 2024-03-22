import React from 'react'
import TopEditAllProject from '@/components/tasks/All Projects/TopEditAllProject.component'
import Files from '@/components/tasks/editTask/Files'
import TasksAllProject from './TasksAllProject.component'
import Teammates from '../editTask/Teammates'
import Modal from '@/components/default/modal.component'
import Sider from '@/components/sider/sider.component'
export default function EditAllProject(props: { cardName: string, cardProgress: number, cardPeople: object[], cardFiles: number, cardTasks: any, openSeeAll: any, closSeeAllParent: any, addNewTask: any }) {
    return (
        <Modal setOverlay={props.closSeeAllParent}>
            <Sider>
                <TopEditAllProject cardName={props.cardName} cardProgress={props.cardProgress} />
                <Files files={props.cardFiles} />
                <TasksAllProject tasks={props.cardTasks} seeAll={props.openSeeAll} closSeeAllParent={props.closSeeAllParent} openAddNewTask = {props.addNewTask} />
                <Teammates cardPeople={props.cardPeople} />
            </Sider>
        </Modal>
    )
}
