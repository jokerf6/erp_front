import React from 'react'
import { Icon } from "@iconify/react"

export default function Card(props:{
    name:string,
    id:number,
    files:number,
    photo:string[],
    progress:number
}) {

    const myImages = props.photo.map((img: any, index: number) => {
        console.log(img[index])
        return <img
            key={index}
            src={img}
            alt='Photo'
            className={`${index === 0 ? "" : "-ml-2"} w-[30px] h-[30px] rounded-full`} />
    })
    const [open, setOpen] = React.useState(false)
    // Function to Open Three Dots
    function handleOpen(){
        setOpen(prevState => !prevState)
    }
    return (
        <div className='Card bg-white rounded-lg p-3 flex flex-col gap-4'style={{boxShadow:"0px 0px 19.5px rgba(37, 27, 55, 0.19)"}}>
            <div className="flex justify-between items-center mb-10 relative">
                <h2 className='font-bold'>{props.name}</h2>
                <button onClick={handleOpen}>
                <Icon icon={"tabler:dots"} className='text-2xl cursor-pointer'/>
                </button>
                {open && <div className="absolute top-6 right-0 rounded-xl border-[1px] border-red-500 flex flex-col">
                    <button className='bg-[#E9E3D5] rounded-t-xl p-2 '>Delete Project</button>
                    <button className='bg-[#F6F6F6] rounded-b-xl p-2 '>Archive Project</button>
                </div>}
            </div>
            <div className="bg-[#A3908452] rounded-3xl h-3"  >
                <p className=' h-[inherit] bg-gradient-to-r from-[#5D1CD2FC] to-[#FF375E] rounded-3xl' style={{ width: `${props.progress}%` }}></p>
            </div>
            <div className="justify-between flex font-semibold ">
                <div className="flex  items-center gap-4">
                    {props.progress === 100 ? <p className='text-green-500 font-bold'>Complete</p> :  <p>progress</p>}
                    {props.progress === 100  && <Icon icon="lets-icons:done-ring-round-fill"  className='text-xl text-green-500'/> }
                </div>
                <p>{props.progress}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex ">
                    {myImages}
                </div>
                <div className="flex justify-between items-center gap-4">
                    <Icon icon={"solar:folder-with-files-linear"} className=" text-2xl text-[#787486]" />
                    <span className='text-[#787486]'>{props.files} Files</span>
                </div>
            </div>
        </div>
    )
}
