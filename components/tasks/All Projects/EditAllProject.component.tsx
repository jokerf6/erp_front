import React from 'react'
import TopEditAllProject from '@/components/tasks/All Projects/TopEditAllProject.component'
import Files from '@/components/tasks/editTask/Files'
import TasksAllProject from './TasksAllProject.component'
import Teammates from '../editTask/Teammates'
import Modal from '@/components/default/modal.component'
export default function EditAllProject(props: { cardName: string, cardProgress: number, cardPeople: object[], cardFiles: number, cardTasks: any, openSeeAll: any, closSeeAllParent: any }) {
    return (
        <Modal setOverlay={props.closSeeAllParent}>
            <div className=" absolute top-0 right-0 bg-[#FAFAFA] flex flex-col gap-4 p-10" onClick={(e)=>e.stopPropagation()}>
                <TopEditAllProject cardName={props.cardName} cardProgress={props.cardProgress} />
                <Files files={props.cardFiles} />
                <TasksAllProject tasks={props.cardTasks} seeAll={props.openSeeAll} closSeeAllParent={props.closSeeAllParent} />
                <Teammates cardPeople={props.cardPeople} />
            </div>
        </Modal>
    )
}
