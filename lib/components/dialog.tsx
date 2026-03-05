"use client";
import React, {JSX, useEffect, useRef} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import { LuX } from "react-icons/lu";
import Image from "next/image";
import {TDialogProps} from "../definitons";
import PButton from "../ui/pButton";

function Dialog({projects}: { projects: Partial<TDialogProps[]> }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const showDialog = searchParams.get("d");
    const projectId = searchParams.get("id");

    useEffect(() => {
        if (showDialog === "y") {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [showDialog]);

    const closeDialog = () => {
        dialogRef.current?.close();
        router.push("/projects");
    }

    const selectedProject = projects.find((project) => project?._id === projectId);

    const navigate = (link: string) => {
        window.open(link, "_blank");
    }


    const dialog: JSX.Element | null =
        showDialog === "y" ? (
            <dialog
                className=" flex flex-col gap-2 text-foreground-main backdrop:bg-neutral-800/70 bg-background-secondary mx-auto my-auto shadow-xl rounded-lg relative p-4 w-full sm:w-3/4 md:max-w-[50rem]"
                ref={dialogRef}
            >
                <div
                    className="cursor-pointer absolute right-2.5 top-2.5 size-fit rounded-full bg-background-main outline outline-outline-main text-foreground-main p-0.5">
                    <LuX onClick={closeDialog}/>
                </div>
                <Image
                    src={selectedProject!.imgUrl}
                    alt="Project Image"
                    width={1280}
                    height={637}
                />
                <h2 className="text-2xl font-bold">{selectedProject!.name}</h2>
                <p>{selectedProject!.descr}</p>
                <div className={'flex items gap-2 items-center'}>
                    <p className={'font-semibold text-xl'}>Tech:</p>
                    <div className={'flex gap-5 items-center'}>
                        {selectedProject!.tech.map((tech, i) => <div
                            className={'outline rounded px-2 font-semibold bg-outline-main'} key={i}>{tech}</div>)}
                    </div>
                </div>
                <PButton onClick={() => navigate(selectedProject!.link)}>Visit Page</PButton>
            </dialog>
        ) : null;

    return dialog;
}

export default Dialog;
