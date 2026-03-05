import React from 'react'
import {LuAtSign, LuGithub, LuSmartphone} from "react-icons/lu";
import {FaLinkedinIn} from "react-icons/fa";
import ContactBox from "../../lib/components/contactBox";
import ContactForm from "../../lib/components/contactForm";


const Contact = () => {
    return (
        <div
            className={'w-full md:max-w-3/4 lg:max-w-3/5 h-1/2 lg:h-full grid grid-cols-1 md:grid-cols-2 md:pt-40 max-md:px-10 gap-10 mx-auto'}>
            <div className={'lg:h-3/4 flex flex-col items-center-safe md:items-start gap-6'}>
                <h1 className={'max-sm:text-center self-center lg:self-start text-6xl font-bold lg:mb-24'}>Contact
                    me!</h1>
                <ContactBox className={'flex items-center-safe gap-2 p-4 bg-background-secondary rounded-lg'}
                            href={'tel:+40751930923'}>
                    <LuSmartphone className={'size-6'}/>
                    <p className={'text-xl font-semibold'}>+40 751 930 923</p>
                </ContactBox>
                <ContactBox
                    className={'flex items-center-safe gap-2 p-4 bg-background-secondary rounded-lg min-w-67.5'}
                    href={'mailto:poputa.alex@gmail.com'}>
                    <LuAtSign className={'size-6'}/>
                    <p className={'text-xl font-semibold'}>poputa.alex@gmail.com</p>
                </ContactBox>
                <ContactBox
                    className={'flex items-center-safe gap-2 p-4 bg-background-secondary rounded-lg min-w-55.5'}
                    href={'https://github.com/PPTZZ?tab=repositories'}>
                    <LuGithub className={'size-6'}/>
                    <p className={'text-xl font-semibold'}>github/PPTZZ</p>
                </ContactBox>
                <ContactBox
                    className={'flex items-center-safe gap-2 p-4 bg-background-secondary rounded-lg min-w-67.5'}
                    href={'https://www.linkedin.com/in/alex-poputa/'}>
                    <FaLinkedinIn className={'size-6'}/>
                    <p className={'text-xl font-semibold'}>linkedin/alex-poputa</p>
                </ContactBox>
            </div>
            <ContactForm/>
        </div>
    )
}
export default Contact
