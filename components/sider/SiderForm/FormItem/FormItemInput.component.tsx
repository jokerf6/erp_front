import React from 'react'

export default function FormItemInput(props: {
    type: string;
    name?: string;
    placeholder?:string
}) {
    return (
        <input
            required
            type={props.type}
            className={`${props.name !== "datetime-local" ? "" : "pr-[32px]"} block text-[14px]  appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] placeholder:capitalize bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
            id={props.name}
            placeholder={props.placeholder}
        />
    )
}
