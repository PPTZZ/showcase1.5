import React from 'react'
import Image from "next/image";
import profilePic from '../public/profile-pic-crop.png'
import frontPageData from '../front-page-data.json'
import Link from "next/link";
import ServeFileMain from "../lib/components/serveFile-main";
import ServeFile from "../lib/components/serveFile";

const Home = async () => {
    return (
        <main className={'w-full flex flex-col min-h-screen pt-16 md:pt-10'}>
            <div className={'max-md:px-4 container mx-auto flex gap-5 grow md:justify-between'}>
                <div className={'md:w-3/5 flex flex-col justify-center gap-4'}>
                    <h1 className={'text-6xl font-bold '}>
                        Hi! I'm Alex.
                    </h1>
                    <p className={'text-3xl font-semibold'}>
                        {frontPageData.profile_descr}
                    </p>
                    <div className={'flex gap-6 mb-4'}>
                        <ServeFile link={'https://drive.google.com/file/d/1J3McLr-TI6ZEHUGl1XJfXMayJDz4EWe9/view'}
                                   className={''}>
                            Resume
                        </ServeFile>
                        <ServeFileMain link={'https://drive.google.com/file/d/10LUHkaXvxn4vcPGiTpDxaCPqxXSy9w_1/view'}
                                       className={''}>
                            Certification
                        </ServeFileMain>

                    </div>
                </div>
                <div className={'hidden md:block bg-radial-[at_43%_35%] from-gray-200 from-30% to-background-main w-fit h-fit rounded-3xl px-2 max-lg:w-1/5 lg:my-auto'}>
                    <Image src={profilePic} alt={'Profile picture of the lead developer'} height={914} width={1321}
                           className={'w-80 h-auto'}/>
                </div>
            </div>
            <div
                className={"bg-primary py-6 text-white max-md:px-4 "}>
                <div className={'container mx-auto '}>
                    <div className={'md:max-w-2/5'}>
                        <h1 className={'text-4xl font-bold '}>
                            Currently working on...
                        </h1>
                        <div>
                            <Link href={frontPageData.latest_project.link}>
                                <p className={'font-semibold text-2xl my-2 underline underline-offset-4'}>{frontPageData.latest_project.title}</p>
                            </Link>
                            <p className={'text-xl'}>{frontPageData.latest_project.descr}</p>
                            <div>
                                <p className={'font-semibold text-2xl my-2'}>Tech:</p>
                                {frontPageData.latest_project.tech.map((tech, i) => (
                                    <div className={'outline rounded px-2 font-semibold bg-outline-main w-fit'}
                                         key={i}>{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home
