import React from 'react'
import TopEditAllProject from '@/components/tasks/All Projects/TopEditAllProject.component'
import Files from '@/components/tasks/editTask/Files'
import TasksAllProject from './TasksAllProject.component'
import Teammates from '../editTask/Teammates'
export default function EditAllProject(props:{cardName:string, cardProgress:number, cardPeople:object[]}) {
    return (
        <div className="  flex flex-col gap-4">
            <TopEditAllProject cardName ={props.cardName} cardProgress={props.cardProgress}/>
            <Files />
            <TasksAllProject />
            <Teammates cardPeople = {props.cardPeople}/>
        </div>
    )
}
