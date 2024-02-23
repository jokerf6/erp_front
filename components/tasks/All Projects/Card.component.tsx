import React from 'react'
import { Icon } from "@iconify/react"

export default function Card() {
    const images = [
        {
            id:1,
            src:"/images/Kerolos Fayez.jpg"
        },
        {
            id:2,
            src:"/images/Matthew Adel.jpg"
        },
        {
            id:3,
            src:"/images/Sheta.png"
        },
    ];
    const myImages = images.map((img: any, index: number) => {
        return <img
            key={index}
            src={img.src}
            alt='Photo'
            className={`${index === 0 ? "" : "-ml-2"} w-[30px] h-[30px] rounded-full`} />
    })
    return (
        <div className='Card bg-white rounded-lg p-3 flex flex-col gap-4'style={{boxShadow:"0px 0px 19.5px rgba(37, 27, 55, 0.19)"}}>
            <div className="flex justify-between items-center mb-10">
                <h2 className='font-bold'>Project Name</h2>
                <Icon icon={"tabler:dots"} />
            </div>
            <div className="bg-[#A3908452] rounded-3xl h-3"  >
                <p className=' h-[inherit] bg-gradient-to-r from-[#5D1CD2FC] to-[#FF375E] rounded-3xl' style={{ width: "50%" }}></p>
            </div>
            <div className="justify-between flex font-semibold ">
                <div className="">
                    <p>Progress</p>
                </div>
                <p>40%</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex ">
                    {myImages}
                </div>
                <div className="flex justify-between items-center gap-4">
                    <Icon icon={"solar:folder-with-files-linear"} className=" text-2xl text-[#787486]" />
                    <span className='text-[#787486]'>15 Files</span>
                </div>
            </div>
        </div>
    )
}
