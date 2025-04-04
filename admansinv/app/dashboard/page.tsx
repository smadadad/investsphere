"use client"

import React from 'react'
import HomeComp from '../components/homeComp'
import { usePathname } from 'next/navigation'
const page = () => {
   
    return (
        <div className='py-7 px-4 '>
           <HomeComp/>

        </div>
    )
}

export default page