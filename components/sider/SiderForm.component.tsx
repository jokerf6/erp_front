import React from 'react'

export default function SiderForm({ children }: any) {
    return (
        <form className="inputs-container bg-[#FAFAFA] flex flex-col flex-1">
            {children}
        </form>
    )
}
