import React from 'react'

export default function FormItemPriority({ children }: any) {
  return (
    <div  className={`${children === "Required" ?  " text-[red]": "text-[green]"}  text-[14px] font-[500]`}>
      ({children})
    </div>
  )
}
