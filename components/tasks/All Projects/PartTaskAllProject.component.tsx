import React from 'react'
import { Icon } from '@iconify/react'
export default function PartTaskAllProject(props: {
    id: number,
    priority: string,
    condition: string,
    files: number,
    comments: number,
    title: string,
    images: string[],
    startDate:string,
    endDate:string
}) {
    const myImages = props.images.map((img: any, index: number) => {
        return <img
            src={img}
            key={index}
            alt="Photo"
            className={`${index === 0 ? "" : "-ml-2"} w-[25px] h-[25px] rounded-full`}
        />
    })
    return (
        <div>
            <div className=" p-3 rounded-[18px]">
                <div className="bg-[#F2EBFE]  rounded-2xl p-2 flex flex-col gap-6">
                    <div className=" flex justify-between items-center">
                        <p className='bg-[#DFA87433] text-[#D58D49] rounded-md p-1'>{props.priority}</p>
                        <div className="flex  items-center gap-2">
                            <Icon icon="radix-icons:dot-filled" className={`text-xl ${props.condition === "Done" ? "text-[#8BC48A]" : "text-[#EE681D]"}`} />
                            <p className='font-medium'>{props.condition}</p>
                        </div>
                    </div>
                    <p className='text-xl font-bold '>{props.title}</p>
                    <div className="flex justify-between items-center">
                        <p className='text-[#787486] font-light'>{props.startDate}</p>
                        <p  className='text-[#FF375E] font-bold'>{props.endDate}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex ">
                            {myImages}
                        </div>
                        <div className="flex gap-5">
                            <div className="flex gap-1 items-center text-[#787486]">
                                <Icon icon={"ant-design:comment-outlined"} className=" text-xl" />
                                <p>{props.comments} Comments</p>
                            </div>
                            <div className="flex gap-1 items-center text-[#787486]">
                                <Icon icon={"solar:folder-with-files-linear"} className=" text-xl" />
                                <p>{props.files} files</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
