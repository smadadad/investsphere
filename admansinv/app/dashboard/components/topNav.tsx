import React from 'react'
import { BsSearch, BsBell, BsPersonFill, BsChevronDown } from 'react-icons/bs'

const TopNav = () => {
    return (
        <div className='flex justify-between border-b-[1px] border-gray-200 w-full items-center p-4'>
            <div className='bg-gray-100 flex items-center p-3 rounded-lg  gap-2'> <BsSearch /> <input type="text" name="" id="" className='focus:outline-0 placeholder:text-xs placeholder:font-semibold' placeholder='Find Investments'/></div>
            <div className='flex items-center gap-3'>
                <div className='border rounded-full border-gray-200 p-2'> <BsBell className='font-semibold' /> </div>
                <div className='flex items-center gap-3'> <BsPersonFill className='text-2xl  rounded-full border'/> <p className='text-xs font-medium'>Smadamu Smadams</p> <BsChevronDown/></div>
            </div>
        </div>
    )
}

export default TopNav