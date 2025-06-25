"use client";
import React, { JSX } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { TDialog } from "@/lib/definitons";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Dialog({ projects }: TDialog) {
  const seaerchParams = useSearchParams();
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const showDialog = seaerchParams.get("d");
  const projectId = seaerchParams.get("id");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  function closeDialog() {
    dialogRef.current?.close();
    router.push("/");
  }

  const selectedProject = projects.find((project) => project._id === projectId);

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        className=" flex flex-col gap-2 backdrop:bg-neutral-700/50 mx-auto my-auto shadow-xl rounded-lg relative p-4 sm:w-1/2 md:w-1/4"
        ref={dialogRef}
      >
        <div className="cursor-pointer absolute right-2.5 top-2.5 size-fit rounded-full bg-background outline outline-border text-foreground p-0.5">
          <X onClick={closeDialog} />
        </div>
        <Image
          src={selectedProject?.imgUrl || " "}
          alt="Project Image"
          width={500}
          height={500}
        />
        <h2 className="text-2xl font-bold">{selectedProject?.name}</h2>
        <p>{selectedProject?.descr}</p>
        <p className="text-xl">
          Tech: <span className="font-bold">{selectedProject?.tech}</span>
        </p>
        <Link
          href={selectedProject?.link || "#"}
          className="bg-sidebar-primary text-sidebar-primary-foreground flex justify-center align-middle p-2 rounded-lg w-28"
          target="_blank"
          rel="noopener noreferer nofollow"
        >
          Visit page
        </Link>
      </dialog>
    ) : null;

  return dialog;
}

export default Dialog;
