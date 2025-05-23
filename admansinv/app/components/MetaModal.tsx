import Link from 'next/link'
import React from 'react'
import { IoClose } from 'react-icons/io5'

const MetaModal = () => {
  return (
    <div className='fixed w-[100vw] h-[100vh] bg-[rgba(0,0,0,.5)] top-0 flex justify-center items-center montserrat '>
        <div className='relative bg-white rounded-md p-10 flex flex-col gap-5 items-center '>
            <div className='absolute top-2 right-2 w-[15px] h-[15px] transition hover:text-red-600 text-lg hover:text-xl  '><Link href='/'><IoClose/></Link></div>
            <div className='text-xl pb-5'>LogIn Or Sign UP</div>
            <div className='w-[15vw] p-3 border-[1px] rounded-md'>Metamask</div>
        </div>
    </div>
  )
}

export default MetaModal