import React from 'react'
import Image from "next/image";
import profilePic from '../public/profile-pic-crop.png'
import frontPageData from '../front-page-data.json'

const Home = async () => {
    return (
        <main className={'w-full'}>
            <div className={'container mx-auto flex gap-5 justify-center md:justify-between'}>
                <div className={'md:w-3/5 flex flex-col gap-4'}>
                    <h1 className={'text-6xl font-bold '}>
                        Hi I'm Alex
                    </h1>
                    <p className={'text-3xl font-semibold'}>
                        {frontPageData.profile_descr}
                    </p>
                </div>
                <div
                    className={'hidden md:block bg-radial-[at_43%_35%] from-gray-200 from-30% to-background-main w-fit rounded-3xl px-2 max-lg:w-1/5'}>
                    <Image src={profilePic} alt={'Profile picture of the lead developer'} height={914} width={1321}
                           className={'w-96 h-auto'}/>
                </div>

            </div>
            <div className={"relative overflow-hidden h-76 -z-20 bg-[url(/2026-03-05.png)] object-fill"}>

                <div className={'container mx-auto z-10'}>
                    <h1 className={'max-sm:text-center lg:self-start text-4xl font-bold mx-auto text-white'}>
                        Currently working on
                    </h1>
                    <div>

                        <div>
                            <Image src={'/work-in-progress.png'} alt={'Latest project'} width={1080} height={800} className={'size-80'}/>
                        </div>
                    </div>
                </div>
                <div className={'bg-primary h-520 w-4xl -rotate-45 absolute left-100 -top-110 -z-10'}></div>
            </div>

        </main>
    );
}
export default Home
