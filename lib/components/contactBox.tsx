import {ReactNode} from 'react'
import Link from "next/link";

const ContactBox = ({children, className, href}: { children: ReactNode, className: string, href?: string }) => {
    return (
        <Link href={href || '#'} target={'_blank'} rel={'noopener noreferrer'}>
            <div className={className}>
                {children}
            </div>
        </Link>
    )
}
export default ContactBox