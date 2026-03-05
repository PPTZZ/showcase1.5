'use client'
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import {useTheme} from "next-themes";

type TCustomImage = {
    darkSrc: string;
    lightSrc: string;
    alt: string;
    w: number;
    h: number;
    className?: string;
}

const CustomImage = ({darkSrc, lightSrc, alt, w, h, className}: TCustomImage) => {
    const {resolvedTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const imageSrc = mounted && resolvedTheme === 'dark' ? darkSrc : lightSrc

    return (
        <Image
            src={imageSrc}
            alt={alt}
            width={w}
            height={h}
            className={className}

        />
    )
}
export default CustomImage