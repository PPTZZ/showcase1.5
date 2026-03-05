import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

// CN
const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
}


// NAV LINKS
const links = [
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/about',
        name: 'about',
    },
    {
        path: '/projects',
        name: 'projects',
    },
    {
        path: '/contact',
        name: 'contact',
    },

]



export {
    cn, links
}