"use client";
import React, { JSX } from "react";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { TDialog } from "@/lib/definitons";
import { X } from "lucide-react";

function Dialog({ projects, onClose }: TDialog) {
  const seaerchParams = useSearchParams();
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
    onClose();
  }

  const selectedProject = projects.find((project) => project._id === projectId);

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        className="backdrop:bg-neutral-700/50 mx-auto my-auto shadow-xl"
        ref={dialogRef}
      >
        <div className="w-52 h-52">
          <X onClick={closeDialog}  className="cursor-pointer"/>
        </div>
      </dialog>
    ) : null;

  return dialog;
}

export default Dialog;
