import React from 'react'
import { Icon } from "@iconify/react";
export default function Inputs() {
    return (
        <div className='inputs-contanier bg-red-200 absolute right-0 w-2/6 h-fit z-20 top-0  p-[20px]'>
            <div className="head p-[20px]  bg-[#FFFFFF] flex justify-between items-center">
                <h1 className='font-bold text-[#251B37]  text-[1.5rem] '>Add new task</h1>
                <Icon icon="gg:close-r" className='text-[1.5rem]' />
            </div>
            <div className="inputs-content flex flex-col gap-5 bg-green-500">
                <div className="input-1 flex flex-col gap-4">
                    <label htmlFor="taskName">Task Name (Required)</label>
                    <input type="text" className='bg-red-500 rounded-[5px] w-2/3 border-stone-900 h-7' id="taskName" placeholder='Enter task name' />
                </div>
                <div className="input-2 flex flex-col gap-4">
                    <label htmlFor="projectName"> Project Name (Required)</label>
                    <select name="projectName" className='bg-red-500 rounded-[5px] w-2/3 border-stone-900 h-7' id="projectName" placeholder='choose project name'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="input-3 flex flex-col gap-4">
                    <label htmlFor="assigned">Assigned to (Required) </label>
                    <input type="text" className='bg-red-500 rounded-[5px] w-2/3 border-stone-900 h-7' id="assigned" placeholder='Enter The Name of Teammates' />
                </div>
                <div className="input-4 flex flex-col gap-4">
                    <label htmlFor="dueDate">Due Date (Required)</label>
                    <input type="date" className='bg-red-500 rounded-[5px] w-2/3 border-stone-900 h-7' id="dueDate" placeholder='Set due Date' />
                </div>
                <div className="input-5 flex flex-col gap-4">
                    <label htmlFor="file">Files (Optional)</label>
                    <input type="file" className='bg-red-500 rounded-[5px] w-2/3 border-stone-900 h-7' id="file" placeholder='Upload files' />
                </div>
                <div className="input-6 flex flex-col gap-4">
                    <label htmlFor="priority">Priority (Required)</label>
                    <select name='priority' className='bg-red-500 rounded-[5px] w-2/3 border-stone-900 h-7' id="priority" placeholder='choose task priority' >
                        <option value="High">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="input-7 flex flex-col gap-4">
                    <label htmlFor="description">Description (Optional)</label>
                    <input type="text" className='bg-red-500 rounded-[5px] w-2/3 border-stone-900 h-7' id="description" />
                </div>
            </div>
        </div>
    )
}




