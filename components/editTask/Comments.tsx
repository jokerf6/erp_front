import React from 'react'
import { Icon } from "@iconify/react";
import { BiExport } from "react-icons/bi";
export default function Comments(){
    return(
        <div className="file-content flex flex-col gap-4">
            <div className="part-one flex justify-between">
                <div className=" flex gap-2  justify-center items-center">
                    <p className='text-[#0D062D] font-bold'>Comments</p>
                    <p className='bg-[#F2EBFE] text-[#251B37] rounded-full flex justify-center items-center w-[20px] h-[20px]'>4</p>
                </div>
                <Icon icon="ic:baseline-plus" className='text-[#FF375E] w-[21px] h-[21px] bg-[rgb(255,55,94,20%)]' />
            </div>
            <div className="files-contents flex flex-col gap-4 border-2 border-[#E7E7E7] rounded-[12px] p-5 overflow-auto max-h-[200px] scroll-m-2 bg-[#FFFFFF]">
                <div className="part-two flex flex-col gap-4 ">
                    <div className="flex  gap-4 items-start">
                        <img src="/images/man.png" alt="Photo of commeter" className='w-[45px] h-[45px] rounded-full' />
                        <div className="comment-content p-5 bg-[#F2EBFE] rounded-xl flex-1 ">
                            <div className="first-line flex justify-between">
                                <h1 className='font-bold'>Matthew Adel</h1>
                                <h3 className='text-[0.8rem]'>10:13Am 13 Feb.2022</h3>
                            </div>
                            <p>Please hold stand up meeting after every update.</p>
                        </div>
                    </div>
                    <div className="flex  gap-4 items-start">
                        <img src="/images/Kerolos Fayez.jpg" alt="Photo of commeter" className='w-[45px] h-[45px] rounded-full' />
                        <div className="comment-content p-5 bg-[#F2EBFE] rounded-xl flex-1">
                            <div className="first-line flex justify-between">
                                <h1 className='font-bold'>Kerolos Fayez</h1>
                                <h3 className='text-[0.8rem]'>10:13Am 13 Feb.2022</h3>
                            </div>
                            <p>I love messi</p>
                        </div>
                    </div>
                    <div className="flex  gap-4 items-start">
                        <img src="/images/man.png" alt="Photo of commeter" className='w-[45px] h-[45px] rounded-full' />
                        <div className="comment-content p-5 bg-[#F2EBFE] rounded-xl flex-1">
                            <div className="first-line flex justify-between">
                                <h1 className='font-bold'>Matthew Adel</h1>
                                <h3 className='text-[0.8rem]'>10:13Am 13 Feb.2022</h3>
                            </div>
                            <p>Please hold stand up meeting after every update.</p>
                        </div>
                    </div>
                    <div className="flex  gap-4 items-start">
                        <img src="/images/man.png" alt="Photo of commeter" className='w-[45px] h-[45px] rounded-full' />
                        <div className="comment-content p-5 bg-[#F2EBFE] rounded-xl flex-1">
                            <div className="first-line flex justify-between">
                                <h1 className='font-bold'>Matthew Adel</h1>
                                <h3 className='text-[0.8rem]'>10:13Am 13 Feb.2022</h3>
                            </div>
                            <p>Please hold stand up meeting after every update.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}