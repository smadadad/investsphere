import React from 'react'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { GiSettingsKnobs } from "react-icons/gi";
import MagicCard from '../components/magicCard';


const page = () => {
    return (
        <div className=' p-10'>
            <div className='flex justify-between mb-20'>
                <div><p className='flex gap-2 items-center  text-xk font-semibold'>Money Market <IoInformationCircleOutline className='text-xl text-gray-400' /></p><p className='text-xs text-gray-400'>Explore reliable, fixed-term investments with regular returns.</p></div>
                <div className='flex gap-3 items-center rounded-md px-8 border-[1px] border-gray-200 cursor-pointer'>Filters <GiSettingsKnobs className='font-bold text-xl' /></div>
            </div>
            <div className='flex flex-wrap gap-3'>
            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />
            </div>
        </div>
    )
}

export default page