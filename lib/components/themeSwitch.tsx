import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {LuMoon, LuSun} from "react-icons/lu";

const ThemeSwitch = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);
    const {resolvedTheme} = useTheme()
    const [currentTheme, setCurrentTheme] = useState(theme);

    useEffect(() => {
        setMounted(true)
        setCurrentTheme(resolvedTheme)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        setCurrentTheme(state => newTheme)
    }

    return (
        <div
            className={`absolute right-10 w-14 h-7 rounded-full cursor-pointer duration-300 ${currentTheme === 'dark' ? 'bg-green-950' : 'bg-green-300'} z-50`}
            onClick={toggleTheme}
        >
            <div
                className={`size-6 p-1 rounded-full aspect-square flex items-center justify-center absolute top-0.5 transition-all duration-300 ${
                    currentTheme === 'dark' ? 'left-1 bg-sky-700' : 'left-7.5 bg-amber-500'
                }`}>
                {currentTheme === 'dark' ? <LuMoon className={'size-4'}/> : <LuSun className={'size-4'}/>}
            </div>
        </div>
    )
}
export default ThemeSwitch
