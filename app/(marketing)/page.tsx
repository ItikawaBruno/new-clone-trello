import { Button } from '@heroui/button';
import { Medal } from 'lucide-react'
import Link from 'next/link';

export default function MarketingPage(){
    return (
        <div className="flex items-center justify-center flex-col h-full">
            <div className="flex items-center justify-center flex-col">
                <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
                    <Medal className="h-6 w-6 mr-2"></Medal>
                    No 1 task management
                </div>
                <h1 className='text-3xl md:text-6xl text-center text-neutral-800'>Kanvia helps team move</h1>
                <div className='text-3xl md-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit mt-6'>
                    work foward.
                </div>
            </div>
            <div className='text-sm md:text-xl text-neutral-400 mt-4 mex-w-xs md:max-w-2xl text-center mx-auto'>
                Collaborate, manage projects, and reaccg new productivity peaks. From high rises to the home office, the way your team works is uinique -  accomplish it all with Kanvia. 
            </div>
            <Button className='mt-6 bg-black text-white'><Link href='/sign-up'>Get Kanvia for free</Link></Button>
        </div>
    );
}