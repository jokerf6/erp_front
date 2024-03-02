import React from 'react'
import PartTaskAllProject from './PartTaskAllProject.component'
export default function TasksAllProject() {
    const data = [
        {
            id: 1,
            priority: "Low",
            condition: "in progress",
            title: "project one",
            files: 5,
            comments: 10,
            images: ["/images/Kerolos Fayez.jpg", "/images/Matthew Adel.jpg", "/images/Sheta.png"]
        },
        {
            id: 2,
            priority: "High",
            condition: "in progress",
            title: "project two",
            files: 6,
            comments: 10,
            images: ["/images/Kerolos Fayez.jpg", "/images/Matthew Adel.jpg", "/images/Sheta.png"]
        },
        {
            id: 3,
            priority: "Medium",
            condition: "Done",
            title: "project Three",
            files: 5,
            comments: 20,
            images: ["/images/Kerolos Fayez.jpg", "/images/Matthew Adel.jpg", "/images/Sheta.png"]
        },
        {
            id: 4,
            priority: "Low",
            condition: "Done",
            title: "project four",
            files: 5,
            comments: 10,
            images: ["/images/Kerolos Fayez.jpg", "/images/Matthew Adel.jpg", "/images/Sheta.png"]
        },
        {
            id: 6,
            priority: "Low",
            condition: "in progress",
            title: "project five",
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
            <div className="taskAllProject overflow-auto h-[300px] bg-white  border-2 border-[#E7E7E7] rounded-2xl">
                {myData.length === 0 ?
            <div className="">
                <img src="/images/no task.png" alt="Photo" />
                <p>No tasks for this project</p>
                <button>Add task</button>
            </div>
            :  myData}  
            </div>
        </div>
    )
}
