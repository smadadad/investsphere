import React from 'react'
import { FaArrowUp,FaArrowRight } from 'react-icons/fa'

const MagicCard = () => {
    return (
        <div>
            <div className='border-[1px] border-gray-200 p-4 rounded-xl  w-[25vw] mb-5'>
                <div className='bg-amber-100 w-10 h-10 rounded-full mb-3'></div>
                <div className='mb-3 font-semibold flex justify-between'>Money Market <span className='p-1 text-green-500 text-xs bg-green-100 rounded-xl flex items-center mx-1'>Low Risk </span></div>
                <div className=' justify-between  text-xs text-gray-400 flex items-center mx-1 mb-3 '>
                    <div>Maturity</div><span className='p-1 '>Average Returns</span>
                </div>
                <div className='flex justify-between mb-3'>
                    <div className='font-semibold'>10 years</div><span className='p-1 text-green-500 text-xs bg-green-100 rounded-xl flex items-center mx-1'>+5.2% <FaArrowUp className='text-green-500 ml-1' /> </span>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-xs text-gray-400'>Minimum Investment</div><span className='font-semibold'> $200,00</span>
                </div>
                <div className='flex justify-center bg-[#1e3d34] items-center rounded-lg p-3 gap-2 text-white font-semibold mt-3 cursor-pointer'> Invest <FaArrowRight /></div>

            </div></div>
    )
}

export default MagicCard