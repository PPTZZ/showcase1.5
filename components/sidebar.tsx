import React from "react";
import { ThemeToggle } from "./themeToggle";
import Image from "next/image";
import CustomSvg from "./ui/customSvg";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-sidebar border-r flex flex-col items-center relative">
      <Image
        src="/IMG/profile-pic.jpg"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mx-auto mt-4 border-2 border-sidebar-border aspect-square"
      />
      <h1 className="mt-8">Alex Popuța</h1>
      <h2>Front End Developer</h2>
      <div className="space-y-4 mt-8">
        <div className="flex gap-2 items-center">
          <CustomSvg
            href="/SVG/icons.svg"
            id="at-solid"
            className={"fill-sidebar-accent-foreground size-5.5"}
          />
          <a href="mailto:poputa.alex@gmail.com">poputa.alex@gmail.com</a>
        </div>
        <div className="flex gap-2 items-center">
          <CustomSvg
            href="/SVG/icons.svg"
            id="phone-solid"
            className={"fill-sidebar-accent-foreground size-5.5"}
          />
          <a href="tel:+40751930923">+40 751 930 923</a>
        </div>
        <div className="flex gap-2 items-center">
          <CustomSvg
            href="/SVG/icons.svg"
            id="linkedin-brands"
            className={"fill-sidebar-accent-foreground size-5.5"}
          />
          <a href="https://www.linkedin.com/in/alex-poputa/">/in/alex-poputa</a>
        </div>
        <div className="flex gap-2 items-center">
          <CustomSvg
            href="/SVG/icons.svg"
            id="github-brands"
            className={"fill-sidebar-accent-foreground size-5.5"}
          />
          <a href="https://github.com/PPTZZ">/PPTZZ</a>
        </div>
         <div className="flex gap-2 items-center">
        <CustomSvg
          href="/SVG/icons.svg"
          id="location-dot-solid"
          className={"fill-sidebar-accent-foreground size-5.5"}
        />
        <p>Cluj-Napoca | RO</p>
      </div>
      </div>
     
      {/* <ThemeToggle /> */}
    </div>
  );
}
