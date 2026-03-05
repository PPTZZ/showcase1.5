import {cva, type VariantProps} from "class-variance-authority";
import type {ButtonHTMLAttributes, ReactNode} from "react";
import {cn} from "@/lib/services/utils";

type TCutsomButton = ButtonHTMLAttributes<HTMLButtonElement>
    & VariantProps<typeof btnVariants>
    & {
    children: ReactNode;
}


const btnVariants = cva('font-semibold cursor-pointer text-white flex items-center justify-center', {
    variants: {
        variant: {
            primary: 'bg-primary rounded-md',
            secondary: 'bg-amber-100 text-black rounded-md',
            link:'bg-background-main rounded-3xl',
            danger: 'bg-red-400 rounded-md',
        },
        size: {
            full:'px-6 py-2 text-xl w-full',
            lg: 'px-6 py-2 text-xl min-w-20',
            link:'py-1 px-3 text-lg'
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'lg'
    },
})


const PButton = ({children, className, variant, size, ...props}: TCutsomButton) => {
    return (
        <button className={cn(btnVariants({variant, size, className}))} {...props}>{children}</button>
    )
}
export default PButton
