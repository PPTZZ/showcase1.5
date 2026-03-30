'use client'
import React from 'react'
import Image from "next/image";
import {LuChevronsRight} from "react-icons/lu";
import {useRouter} from "next/navigation";
import PButton from "../ui/pButton";
import {TProject} from "../definitons";


const Card = ({name, descr, imgUrl, tech, id}: Partial<TProject>) => {

    const navigate = useRouter()

    const openDialog = () => {
        navigate.push(`/projects?d=y&id=${id}`)
    }


    return (
        <div
            className={'md:relative min-w-72 w-full sm:max-w-100 h-fit border border-outline-main rounded-lg shadow-lg group/card overflow-hidden'} onClick={openDialog}>
            <div className={'flex '}>
                <Image src={imgUrl!}
                       alt={`Image of ${name}`}
                       width={1280}
                       height={637}
                       className={'w-full h-auto'}
                />
                <div
                    className={'w-full h-full px-2 bg-primary/70 backdrop-blur-sm absolute translate-y-100 group-hover/card:translate-y-0 duration-300 hidden md:block'}>
                    <h2 className={'text-white font-semibold text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'}>{name}</h2>
                    <p className={'mt-2 line-clamp-3 text-white font-semibold text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'}>{descr}</p>
                    <div className={'flex gap-2'}>
                        <p className={'mt-2 text-white font-semibold text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'}>Tech:</p>
                        <p className={'mt-2 text-white font-semibold text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'}>{tech?.join(', ')}</p>
                    </div>
                    <PButton variant={'link'} size={'link'}
                             className={'group/btn drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] flex items-center my-1 text-lg underline '}
                             onClick={openDialog}
                    >
                        <p>Read more </p>
                        <LuChevronsRight
                            className={'group-hover/btn:translate-x-1 duration-150 relative top-0.5 size-6'}/>
                    </PButton>
                </div>
            </div>
        </div>
    )
}
export default Card
