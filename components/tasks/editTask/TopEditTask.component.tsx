import React from 'react'
import {Icon} from '@iconify/react'
import { statusList } from "@/static/statusList";
import CheckBox from "@/components/default/checkBox";
import getTaskPriorityColors from '@/functions/getTaskPriorityColors';

export default function TopEditTask(props:{
    isOpen:any,
    taskCategory: string,
    taskName:string,
    taskPriority:string
}) {
    const [status, setStatus] = React.useState<number>(parseInt(props.taskCategory)-1);

    return (
        
        <div>
            <div className="first-part  flex flex-col gap-4">
                <div className="flex justify-between">
                    <h3 className="text-primary-p">Created At 12 jan 2023 10:12 AM</h3>
                    <Icon
                        icon="gg:close-r"
                        className="text-[1.5rem] cursor-pointer"
                        onClick={()=>props.isOpen(false)}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-overlay-title-text text-[1.5rem]">
                        {props.taskName}
                    </h1>
                    <p className={`${getTaskPriorityColors(props.taskPriority)} rounded-lg px-4 py-1 capitalize`}>
                        {props.taskPriority}
                    </p>
                </div>
                <h2 className="text-primary-pink font-bold">
                    To be Done in 12 jan 2023
                </h2>
                <p className="text-primary-p">
                    Create test cases for old APIs in tasks module in pages 1,2,3 and 4
                </p>
                <div className="flex justify-between items-center">
                    {statusList.map((item: string, idx: number) => {
                        return (
                            <CheckBox
                                key={idx}
                                active={idx === status}
                                text={item}
                                setStatus={setStatus}
                                id={idx}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
