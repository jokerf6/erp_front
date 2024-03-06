import React from 'react'
import PartTaskAllProject from './PartTaskAllProject.component'
export default function TasksAllProject() {
    const data = [
        {
            id: 1,
            priority: "Low",
            condition: "in progress",
            title: "Task one",
            files: 5,
            comments: 10,
            images: ["/images/Kerolos Fayez.jpg", "/images/Matthew Adel.jpg", "/images/Sheta.png"]
        },
        {
            id: 2,
            priority: "High",
            condition: "in progress",
            title: "Task two",
            files: 6,
            comments: 10,
            images: ["/images/Kerolos Fayez.jpg", "/images/Matthew Adel.jpg", "/images/Sheta.png"]
        },
        {
            id: 3,
            priority: "Medium",
            condition: "Done",
            title: "Task Three",
            files: 5,
            comments: 20,
            images: ["/images/Kerolos Fayez.jpg", "/images/Matthew Adel.jpg", "/images/Sheta.png"]
        },
        {
            id: 4,
            priority: "Low",
            condition: "Done",
            title: "Task four",
            files: 5,
            comments: 10,
            images: ["/images/Kerolos Fayez.jpg", "/images/Matthew Adel.jpg", "/images/Sheta.png"]
        },
        {
            id: 6,
            priority: "Low",
            condition: "in progress",
            title: "Task five",
            files: 15,
            comments: 10,
            images: ["/images/Kerolos Fayez.jpg", "/images/Matthew Adel.jpg", "/images/Sheta.png"]
        }
    ]
    const myData = data.map((data) => {
        return <PartTaskAllProject
            id={data.id}
            key={data.id}
            priority={data.priority}
            condition={data.condition}
            files={data.files}
            comments={data.comments}
            title={data.title}
            images={data.images}
        />
    })
    return (
        <div>
            <div className="part-one flex justify-between items-center">
                <div className="flex gap-3">
                    <h1 className='text-[#0D062D] font-bold'>Tasks</h1>
                    <p className='bg-[#F2EBFE] rounded-full w-5 h-5 flex justify-center items-center'>{myData.length}</p>
                </div>
                <button className='font-bold'>See All</button>
            </div>
            {myData.length === 0 ?
                <div className="flex flex-col items-center justify-center gap-2 bg-white  border-2 border-[#E7E7E7] rounded-2xl p-4">
                    <img src="/images/no task.png" alt="Photo" className=' w-[5rem]' />
                    <p className='text-[#000000]'>No tasks for this project</p>
                    <button className='bg-[#251B37] text-white text-[0.9rem] rounded-md cursor-pointer w-[8rem] p-1'>Add task</button>
                </div>
                : <div className="taskAllProject overflow-auto h-[300px] bg-white  border-2 border-[#E7E7E7] rounded-2xl">
                    {myData}
                </div>
            }
        </div>
    )
}
