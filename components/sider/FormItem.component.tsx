import React from 'react'

export default function FormItem({children}:any) {
  return (
    <div className="flex  flex-col gap-1">
      {children}
    </div>
  )
}
