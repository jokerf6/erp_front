import React from 'react'

export default function Teammates(props: { cardPeople?: any; }) {
    // TODO: first task contain 6 teammates and that is not correct
    const myImages = props.cardPeople.map((img: any) => {
        return (
            <div className="flex gap-4">
                <img
                    src={img.image}
                    alt='Photo'
                    key={img.id}
                    className="w-[50px] h-[50px] rounded-full" />
                <div className="">
                    <h2 className='font-bold text-overlay-primary-text'>{img.name} </h2>
                    <h3 className='text-overlay-role-text'>{img.jobTitle} </h3>
                </div>
            </div>
        )
    })
    return (
        <div className="file-content flex flex-col gap-4">
            <div className="part-one flex justify-between">
                <div className=" flex gap-2  justify-center items-center">
                    <p className='text-overlay-primary-text font-bold'>Teammates</p>
                    <p className='bg-overlay-number-bg text-overlay-number-text rounded-full flex justify-center items-center w-[20px] h-[20px]'>{props.cardPeople.length}</p>
                </div>
            </div>
            <div className="files-contents flex flex-col gap-4 border-2 border-[#E7E7E7] rounded-[12px] p-5 overflow-auto max-h-[200px] scroll-m-2 bg-[#FFFFFF]">
                <div className="teammates-content flex flex-col gap-4 ">
                    {myImages}
                </div>
            </div>
        </div>
    )
}