'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import { LuMenu } from "react-icons/lu";
import {links} from "../services/utils";
import ThemeSwitch from "./themeSwitch";



const Navbar = () => {

    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    return (
            <div
                className={'w-full h-12 border-b-2 border-outline-main shadow-lg flex items-center justify-center bg-background-secondary fixed top-0'}>
                <div className={'hidden md:flex items-center justify-around md:w-2/4'}>
                    {links.map((link, i) =>
                        <Link
                            key={i}
                            href={link.path}
                            className={`text-xl font-semibold 
                            ${pathname === link.path
                                ? 'text-primary underline underline-offset-2 decoration-2'
                                : ' '}`}>
                            {link.name}
                        </Link>)}

                </div>
                <div className={'w-full md:hidden flex flex-col items-center relative z-50 '}>
                    <LuMenu onClick={() => {
                        setIsOpen(!isOpen)
                    }} className={'cursor-pointer size-8 p-1 rounded hover:bg-background-main duration-150'}/>
                    {isOpen && <div onClick={() => setIsOpen(!isOpen)}
                                    className={'w-full sm:w-1/2 flex flex-col items-center absolute top-8 bg-background-secondary sm:rounded-b-xl animate-fade-down animate-once animate-duration-500 animate-ease-in-out z-50'}>
                        {links.map((link, i) =>
                            <Link
                                key={i}
                                href={link.path}
                                className={`text-xl font-semibold m-3 
                            ${pathname === link.path
                                    ? 'text-primary underline underline-offset-2 decoration-2'
                                    : ' '}`}>
                                {link.name}
                            </Link>)}
                    </div>}
                </div>
                <ThemeSwitch/>
            </div>
    )
}
export default Navbar
