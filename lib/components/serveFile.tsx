'use client'
import React from 'react'
import PButton from "@/lib/ui/pButton";

const ServeFile = ({children, link, className}: {  link: string,children:React.ReactNode,className:string }) => {

    const handleFile = () => {
        window.open(link, '_blank')
    }

    return (
        <div>
            <PButton variant={'link'} size={'link'} onClick={handleFile} className={className}>
                {children}
            </PButton>
        </div>
    )
}
export default ServeFile
