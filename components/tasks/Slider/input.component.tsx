import React from 'react'

export default function Input(props:{type:string, name:string, title?:string;}) {
    return (
        <div className="input-1 flex flex-col gap-1">
            <label
                className="text-[#251B37] text-[1rem] font-medium"
                htmlFor="taskName"
            >
                {props.title}{" "}
                <span className="text-[0.8rem] text-[red]"> (Required)</span>
            </label>
            <input
                name={props.name}
                required
                type={props.type}
                className=" rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px]"
                id="taskName"
                placeholder="Enter task name"
            />
        </div>
    )
}
