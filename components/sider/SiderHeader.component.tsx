import { Icon } from '@iconify/react'
import React from 'react'

export default function SiderHeader(props:{ children: any,setOverlay:any }) {
    return (
        < div className="head p-[20px]  bg-[#FFFFFF] flex justify-between items-center shadow-[0px_1px_10.1px_rgba(0,0,0,0.1)]" >
            <h1 className="font-[600] text-[#251B37]  text-[22px] ">
                {props.children}
            </h1>
            <Icon
                icon="gg:close-r"
                className="text-[1.5rem] cursor-pointer"
                onClick={() => props.setOverlay(false)}/>
        </div>
    )
}
