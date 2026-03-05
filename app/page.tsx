import React from 'react'
import Image from "next/image";
import profilePic from '@/public/profile-pic-crop.png'
import frontPageData from '@/front-page-data.json'

const Home = async () => {
    return (
        <main className={'w-full'}>
            <div className={'container mx-auto flex gap-5 justify-between'}>


                <div className={'w-3/5 flex flex-col gap-4'}>
                    <h1 className={'text-6xl font-bold '}>
                        Hi I'm Alex
                    </h1>
                    <p className={'text-3xl font-semibold'}>
                        {frontPageData.profile_descr}
                    </p>
                </div>
                <div
                    className={'bg-radial-[at_43%_35%] from-gray-200 from-30% to-background-main w-fit rounded-3xl px-2 max-lg:w-1/5'}>
                    <Image src={profilePic} alt={'Profile picture of the lead developer'} height={914} width={1321}
                           className={'w-96 h-auto'}/>
                </div>

            </div>
            <div className={'bg-primary h-28 my-5 py-5'}>
                <h1 className={'max-sm:text-center lg:self-start text-4xl font-bold lg:mb-24 container mx-auto text-white'}>
                    Currently working on
                </h1>
            </div>

        </main>
    );
}
export default Home
