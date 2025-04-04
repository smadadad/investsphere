import React from 'react'
import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu'
import { BsGraphUp, BsChevronDown, BsQuestionCircle } from 'react-icons/bs'
import { PiNotebookFill, PiClockClockwise } from 'react-icons/pi'
import Link from 'next/link'
const SideNav = () => {
  return (
    <div className='sticky top-0  py-10 px-7 bg-gray-100 h-[100vh] duration-700 flex flex-col '>
      <div className='font-semibold mb-10'>ADAMS INVESTMENT</div>
      <div className='text-xs flex flex-col gap-3 [&>div]:py-3 [&>div]:px-5 [&>div]:hover:bg-white [&>div]:transition  [&>div]:rounded-md [&>div]:cursor-pointer [&>div:not(:nth-child(2))]:flex [&>div]:gap-2 [&>div]:items-center'>
        <div><LuLayoutDashboard className='text-xl text-gray-500'/> Dashboard</div>
        <div className=' hover:bg-[rgba(0,0,0,0)]! [&:hover>div]:max-h-[3000px] '>
          <div className='flex gap-2 items-center'><BsGraphUp className='text-xl text-gray-500'/> <p>Investment</p> <BsChevronDown className='text-md text-gray-500'/></div>
          <div className='max-h-0 overflow-hidden [&>*]:mt-3 transition-[max-height] duration-1000 flex flex-col  [&>*]:py-3 [&>*]:px-5 [&>*]:hover:bg-white [&>*]:transition  [&>*]:rounded-md [&>*]:cursor-pointer'>
            <Link href="/dashboard/bonds">Bond</Link>
            <Link href="/dashboard/moneymarket">Money Market</Link>
            <Link href="/dashboard/bonds">Eqiuty</Link>
          </div>
        </div>
        <div><PiNotebookFill className='text-xl text-gray-500'/>Portfolio</div>
        <div><PiClockClockwise className='text-xl text-gray-500'/>Transaction History</div>
      </div>
      <div className='mt-auto border-t-[1px] border-gray-300 text-xs pt-5 flex flex-col gap-3 [&>div]:cursor-pointer'>
        <div className='flex gap-3'><BsQuestionCircle className='text-xl text-gray-500'/>Contact Us</div>
        <div className='flex gap-3 text-red-500'><LuLogOut className='text-xl '/>Logout</div>
      </div>
    </div>
  )
}

export default SideNav