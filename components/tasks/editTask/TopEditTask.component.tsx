import React from 'react'
import {Icon} from '@iconify/react'
import { statusList } from "@/static/statusList";
import CheckBox from "@/components/default/checkBox";

export default function TopEditTask(props:{isOpen:any}) {
    const [status, setStatus] = React.useState<number>(0);

    return (
        
        <div>
            <div className="first-part  flex flex-col gap-4">
                <div className="flex justify-between">
                    <h3 className="">Created At 12 jan 2023 10:12 AM</h3>
                    <Icon
                        icon="gg:close-r"
                        className="text-[1.5rem] cursor-pointer"
                        onClick={()=>props.isOpen(false)}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-[#251B37] text-[1.5rem]">
                        Create Text Cases - Project Name
                    </h1>
                    <p className="text-[#D58D49] bg-[rgba(223,168,116,0.2)] rounded-lg px-4 py-1">
                        Low
                    </p>
                </div>
                <h2 className="text-[#FF375E] font-bold">
                    To be Done in 12 jan 2023
                </h2>
                <p className="text-[#787486]">
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
