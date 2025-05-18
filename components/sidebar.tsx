import React from "react";
import { ThemeToggle } from "./themeToggle";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-sidebar">
      <ThemeToggle />
    </div>
  );
}
