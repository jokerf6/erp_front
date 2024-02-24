import React from 'react'
import TopEditAllProject from '@/components/tasks/All Projects/TopEditAllProject.component'
import Files from '@/components/tasks/editTask/Files'
import TasksAllProject from './TasksAllProject.component'
import Teammates from '../editTask/Teammates'
export default function EditAllProject() {
    return (
        <div className="  flex flex-col gap-4">
            <TopEditAllProject />
            <Files />
            <TasksAllProject />
            <Teammates />
        </div>
    )
}
