'use client'
import React from 'react'
import PButton from "../ui/pButton";

const ServeFile = ({children, link, className}: {  link: string,children:React.ReactNode,className:string }) => {

    const handleFile = () => {
        window.open(link, '_blank')
    }

    return (
        <div>
            <PButton variant={'file_serving'} size={'mid'} onClick={handleFile} className={className}>
                {children}
            </PButton>
        </div>
    )
}
export default ServeFile
