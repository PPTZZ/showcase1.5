import React from 'react'
import CustomImage from "@/lib/components/customImage";
import ServeFile from "@/lib/components/serveFile";
import {LuChevronDown} from "react-icons/lu";

const About = () => {


    return (
        <>
            <section
                className={'grid grid-cols-1 md:grid-cols-2 w-full lg:max-w-3/5 lg:mx-auto place-items-center px-10'}>
                <div className={' flex flex-col items-center text-center md:border-r-2 border-primary md:px-20'}>
                    <p className={' text-xl tracking-widest'}>
                        I&apos;m a dedicated and pragmatic Full Stack Developer focused on delivering clean, functional
                        code. My
                        technical heart belongs to the MERN stack, which I utilize to build robust and scalable
                        applications,
                        often opting for Next.js for its performance benefits and superior developer experience.
                    </p>
                    <div
                        className={'my-4 lg:my-6 bg-primary hover:bg-conic/decreasing hover:bg-animate-spin hover:from-violet-700 hover:via-lime-300 hover:to-violet-700 rounded-3xl w-fit h-fit p-0.5 overflow-hidden transition-colors duration-500'}>
                        <ServeFile
                            link={'https://drive.google.com/file/d/1J3McLr-TI6ZEHUGl1XJfXMayJDz4EWe9/view?usp=sharing'}
                            className={'group flex items-center justify-center gap-1'}>resume
                            <LuChevronDown
                                className={'group-hover:animate-bounce group-hover:animate-infinite group-hover:animate-duration-1000 group-hover:animate-ease-in-out'}/>
                        </ServeFile>
                    </div>
                </div>
                <CustomImage darkSrc={'/code-dark.jpg'} lightSrc={'/code-light.jpg'} alt={'Code snippet image'} w={720}
                             h={498} className={'h-48 object-cover md:w-11/12'}/>
            </section>
            <section
                className={'grid grid-cols-1 md:grid-cols-2 w-full lg:max-w-3/4 lg:mx-auto place-items-center px-10'}>
                <CustomImage darkSrc={'/folder-structure-dark.jpg'} lightSrc={'/folder-structure-light.jpg'}
                             alt={'Image of folder structure'} w={236} h={633} className={'h-7/12 object-cover'}/>
                <div className={'flex flex-col items-center text-center  md:border-l-2 border-primary md:px-20'}>
                    <p className={'text-xl tracking-widest'}>
                        My journey into development has been one of continuous, self-driven learning. While I took a
                        non-traditional path outside of a Computer Science university, my commitment to mastering the
                        craft
                        is
                        evidenced by the successful completion of the intensive 10-month GoIT bootcamp. During this
                        program,
                        I
                        naturally gravitated toward and excelled in leadership roles, frequently serving as Team Lead on
                        group
                        projects. In this capacity, I not only completed my own work but also mentored colleagues,
                        helping
                        them
                        debug complex issues and understand core concepts -a testament to my strong problem- solving and
                        communication skills.
                    </p>
                    <div
                        className={' my-4 lg:my-6 bg-primary hover:bg-conic/decreasing hover:bg-animate-spin hover:from-violet-700 hover:via-lime-300 hover:to-violet-700 rounded-3xl w-fit h-fit p-0.5 overflow-hidden transition-colors duration-500'}>
                        <ServeFile
                            link={'https://drive.google.com/file/d/10LUHkaXvxn4vcPGiTpDxaCPqxXSy9w_1/view?usp=sharing'}
                            className={'group flex items-center justify-center gap-1'}>certificate
                            <LuChevronDown
                                className={'group-hover:animate-bounce group-hover:animate-infinite group-hover:animate-duration-1000 group-hover:animate-ease-in-out'}/>
                        </ServeFile>
                    </div>
                </div>
            </section>

        </>
    )
}
export default About
