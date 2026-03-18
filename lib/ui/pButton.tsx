import {cva, type VariantProps} from "class-variance-authority";
import type {ButtonHTMLAttributes, ReactNode} from "react";
import {cn} from "../services/utils";

export type TCustomButton = ButtonHTMLAttributes<HTMLButtonElement>
    & VariantProps<typeof btnVariants>
    & {
    children: ReactNode;
}

const btnVariants = cva('font-semibold cursor-pointer text-white flex items-center justify-center', {
    variants: {
        variant: {
            primary: 'bg-primary rounded-md',
            secondary: 'bg-amber-100 text-black rounded-md',
            link: '',
            danger: 'bg-red-400 rounded-md',
            file_serving: 'bg-background-main rounded-3xl text-foreground-main'
        },
        size: {
            full: 'px-6 py-2 text-xl w-full',
            lg: 'px-6 py-2 text-xl w-40',
            mid: 'py-1 px-3 text-lg',
            link: ''
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'lg'
    },
})


const PButton = ({children, className, variant, size, ...props}: TCustomButton) => {
    return (
        <button className={cn(btnVariants({variant, size, className}))} {...props}>{children}</button>
    )
}
export default PButton
