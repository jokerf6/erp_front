import React, { useRef } from 'react'
import { Icon } from "@iconify/react";
import Modal from '../default/modal.component';

export default function AddTask(props:{
    setAddTaskOverlay:any
}) {
    const {setAddTaskOverlay} = props
    // Data of Project Name That Should be Diplayed
    const myPrjects = ["choose project name",1,2,3,4,5,6];
    const myProjectsArray = myPrjects.map((data)=>{
        return <option value = {data}> {data} </option> 
    })
    
    // Data of Priority That Should be Diplayed
    const myPriority = ["Low", "Medium", "High","Mohma Fsh5555"];
    const mypriorityArray = myPriority.map((data)=> <option value ={data}> {data}</option>)

    // Function That When Click it Click input Filed With type File
    const fileInputRef = useRef<HTMLInputElement>(null);
    function ClickInputFile(){
        fileInputRef.current?.click()
    }
    return (
        <Modal setOverlay={setAddTaskOverlay}>
        <div className="absolute top-0 right-0 min-h-screen max-w-[600px] md:w-[50vw] z-[100] flex flex-col justify-center">
                <div className="head p-[20px]  bg-[#FFFFFF] flex justify-between items-center shadow-[0px_1px_10.1px_rgba(0,0,0,0.1)]">
                    <h1 className='font-bold text-[#251B37]  text-[1.5rem] '>Add new task</h1>
                    <Icon icon="gg:close-r" className='text-[1.5rem] cursor-pointer' onClick={()=>setAddTaskOverlay(false)}/>
                </div>
            <form className='inputs-contanier bg-[#FAFAFA] flex flex-col flex-1 p-[20px]'>
                <div className="inputs-content flex flex-col gap-5 ">
                    <div className="input-1 flex flex-col gap-1">
                        <label className='text-[#251B37] text-[1rem] font-medium' htmlFor="taskName">Task Name <span className='text-[0.8rem] text-[red]'> (Required)</span></label>
                        <input name='taskName' required type="text" className=' rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px]' id="taskName" placeholder='Enter task name' />
                    </div>
                    <div className="input-2 flex flex-col gap-1">
                        <label className='text-[#251B37] text-[1rem] font-medium' htmlFor="projectName"> Project Name <span className='text-[0.8rem] text-[red]'> (Required)</span></label>
                        <select  required name="projectName" className=' rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px]' id="projectName" placeholder='choose project name'>
                            {myProjectsArray}
                        </select>
                    </div>
                    <div className="input-3 flex flex-col gap-1">
                        <label className='text-[#251B37] text-[1rem] font-medium' htmlFor="assigned">Assigned to<span className='text-[0.8rem] text-[red]'> (Required)</span> </label>
                        <input required type="text" className=' rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px]' id="assigned" placeholder='Enter The Name of Teammates' />
                    </div>
                    <div className="input-4 flex flex-col gap-1">
                        <label className='text-[#251B37] text-[1rem] font-medium' htmlFor="dueDate">Due Date <span className='text-[0.8rem] text-[red]'> (Required)</span></label>
                        <input required type="date" className=' rounded-[5px]  border-[#251B37] border-[1px] indent-[5px] h-[40px]' id="dueDate" placeholder='Set due Date' />
                    </div>
                    <div className="input-5 flex flex-col gap-1">
                        <label className='text-[#251B37] text-[1rem] font-medium' htmlFor="file">Files <span className='text-[0.8rem] text-[green] '>(Optional)</span></label>
                        <button className='rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px] flex justify-between items-center' onClick={ClickInputFile}>
                        <input required ref={fileInputRef} style= {{visibility:"hidden"}} type="file" className='  ' id="file" placeholder='Upload files' />
                        <Icon icon="subway:pin"  className='-rotate-45 mr-[5px]'/>
                        </button>
                    </div>
                    <div className="input-6 flex flex-col gap-1">
                        <label className='text-[#251B37] text-[1rem] font-medium' htmlFor="priority">Priority <span className='text-[0.8rem] text-[red]'> (Required)</span></label>
                        <select required name='priority' className=' rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px]' id="priority" placeholder='choose task priority' >
                            {mypriorityArray}
                        </select>
                    </div>
                    <div className="input-7 flex flex-col gap-1">
                        <label className='text-[#251B37] text-[1rem] font-medium' htmlFor="description">Description <span className='text-[0.8rem] text-[green] '>(Optional)</span></label>
                        <textarea  className=' rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px] max-h-[100px] min-h-[100px]' id="description" placeholder='Write task details' />
                    </div>
                </div>
            <div className="bg-[#FFFFFF] flex justify-center items-center mt-[20px] w-full">
            <button className='bg-gradient-to-r from-[#5A28B3] to-[#E2778C] text-[1.5rem] flex-1 text-[#FFFFFF]  rounded-[5px] py-[5px]' >Add</button>
            </div>
            </form>
        </div>
        </Modal>
    )
}




