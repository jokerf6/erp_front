import React from 'react'
import PartTaskAllProject from './PartTaskAllProject.component'
export default function TasksAllProject(props:{tasks:any, seeAll:any, closSeeAllParent:any, openAddNewTask:any}) {
    const myData = props.tasks.map((data:any) => {
        return <PartTaskAllProject
            id={data.id}
            key={data.id}
            priority={data.priority}
            condition={data.condition}
            files={data.files}
            comments={data.comments}
            title={data.title}
            images={data.images}
            startDate=""
            endDate=""
        />
    })

    // Function that handel close project details and show all tasks 
    function handleChanges(){
        props.seeAll(true);
        props.closSeeAllParent(false);
    }

    return (
        <div>
            <div className="part-one flex justify-between items-center">
                <div className="flex gap-3">
                    <h1 className='text-[#0D062D] font-bold'>Tasks</h1>
                    <p className='bg-[#F2EBFE] rounded-full w-5 h-5 flex justify-center items-center'>{myData.length}</p>
                </div>
                <button className='font-bold' onClick={handleChanges}>See All</button>
            </div>
            {myData.length === 0 ?
                <div className="flex flex-col items-center justify-center gap-2 bg-white  border-2 border-[#E7E7E7] rounded-2xl p-4">
                    <img src="/images/no task.png" alt="Photo" className=' w-[5rem]' />
                    <p className='text-[#000000]'>No tasks for this project</p>
                    <button className='bg-[#251B37] text-white text-[0.9rem] rounded-md cursor-pointer w-[8rem] p-1' onClick={()=>props.openAddNewTask(true)}>Add task</button>
                </div>
                : <div className="taskAllProject overflow-auto h-[300px] bg-white  border-2 border-[#E7E7E7] rounded-2xl">
                    {myData}
                </div>
            }
        </div>
    )
}
