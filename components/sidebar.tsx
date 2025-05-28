import React from "react";
import { ThemeToggle } from "./themeToggle";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-sidebar border-r border-sidebar-border">
      <Image src='/IMG/profile-pic.jpg' alt="Profile Picture" width={150} height={150} className="rounded-full mx-auto mt-4 border-2 border-sidebar-border"/>
      <ThemeToggle />
    </div>
  );
}
