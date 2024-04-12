import React from 'react'

export default function FormItemPriority(props: {children: string}) {
  return (
    <div  className={`${props.children.toLocaleLowerCase() === "required" ?  " text-[red]": "text-[green]"}  text-[14px] font-[500] capitalize`}>
      ({props.children})
    </div>
  )
}
