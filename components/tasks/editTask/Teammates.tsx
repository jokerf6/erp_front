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
                    <h2 className='font-bold text-sider-primary-text'>{img.name} </h2>
                    <h3 className='text-sider-role-text'>{img.jobTitle} </h3>
                </div>
            </div>
        )
    })
    return (
        <div className="file-content flex flex-col gap-4">
            <div className="part-one flex justify-between">
                <div className=" flex gap-2  justify-center items-center">
                    <p className='text-sider-primary-text font-bold text-[20px]'>Teammates</p>
                    <p className='bg-sider-number-bg text-sider-number-text rounded-full flex justify-center items-center min-w-[25px] h-[25px] font-[500] px-2'>{props.cardPeople.length}</p>
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