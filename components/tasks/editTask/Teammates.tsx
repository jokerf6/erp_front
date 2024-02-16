import React from 'react'

export default function Teammates() {
    return(
        <div className="file-content flex flex-col gap-4">
            <div className="part-one flex justify-between">
                <div className=" flex gap-2  justify-center items-center">
                    <p className='text-[#0D062D] font-bold'>Teammates</p>
                    <p className='bg-[#F2EBFE] text-[#251B37] rounded-full flex justify-center items-center w-[20px] h-[20px]'>4</p>
                </div>
            </div>
            <div className="files-contents flex flex-col gap-4 border-2 border-[#E7E7E7] rounded-[12px] p-5 overflow-auto max-h-[200px] scroll-m-2 bg-[#FFFFFF]">
                <div className="teammates-content flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <img src="/images/Kerolos Fayez.jpg" alt="Photo of Person" className='w-[45px] h-[45px] rounded-full'/>
                        <div className="">
                            <h1 className='font-bold'>Kerolos Fayez</h1>
                            <p className='text-[#3F3C3D]'>Team Leader</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src="/images/Matthew Adel.jpg" alt="Photo of Person" className='w-[45px] h-[45px] rounded-full'/>
                        <div className="">
                            <h1 className='font-bold'>Matthew Adel</h1>
                            <p className='text-[#3F3C3D]'>Team Leader</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src="/images/Sheta.png" alt="Photo of Person" className='w-[45px] h-[45px] rounded-full'/>
                        <div className="">
                            <h1 className='font-bold'>Fahd Hakem</h1>
                            <p className='text-[#3F3C3D]'>Team Leader</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}