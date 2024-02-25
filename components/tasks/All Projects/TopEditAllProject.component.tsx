import React from 'react'
import {Icon} from '@iconify/react'
export default function TopEditAllProject(props:{cardName:string, cardProgress:number}) {
    return (
        <div className='flex flex-col gap-3'>
            <div className="flex justify-between items-center">
                <h1 className='text-xl font-bold text-[#251B37]' >{props.cardName}</h1>
                <Icon icon={"tabler:dots"} className='text-2xl cursor-pointer'/>
            </div>
            <div className="flex justify-between items-center">
                <h2 className='text-[#FF375E] font-bold'>Due Date 12 Jan.2023</h2>
                <h3 className='text-[#787486]'>Created at 23 at Dec.2022</h3>
            </div>
            <p className='text-[#787486]'>Create test cases for old APIs in tasks module in pages 1,2,3 and 4  </p>
            <div className="bg-[#A3908452] rounded-3xl h-3"  >
                <p className=' h-[inherit] bg-gradient-to-r from-[#5D1CD2FC] to-[#FF375E] rounded-3xl' style={{ width: `${props.cardProgress}%` }}></p>
            </div>
            <div className="flex justify-between items-center text-lg font-medium">
                <p >Progress</p>
                <p>{props.cardProgress}</p>
            </div>
        </div>
    )
}
