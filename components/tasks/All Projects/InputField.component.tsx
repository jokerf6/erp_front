import React from 'react'

export default function InputField(props:{
    type:string,
    name:string,
    placeholder:string
}) {
    return (
        <div className='flex flex-col gap-3'>
            <label htmlFor={props.name}>{props.name} <span>(Required)</span></label>
            <input id={props.name} type={props.type} className=' rounded-md h-10 indent-2 border-[1px] border-[#251B37]' placeholder={props.placeholder}/>
        </div>
    )
}
