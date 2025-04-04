import React from 'react'
import { FaHandSparkles, FaArrowUp, FaArrowRight } from 'react-icons/fa'


const HomeComp = () => {
    return (
        <>
            <div className=' font-semibold text-xl flex items-center'> Welcome Back, Smadamu <FaHandSparkles className='text-yellow-500 text-xl ml-3 rotate-12' /> </div>
            <div className='text-xs text-gray-400 flex items-center mb-16'>Your portfolio has grown <span className='p-1 text-green-500 bg-green-100 rounded-xl flex items-center mx-1'>+3.2% <FaArrowUp className='text-green-500' /> </span> this week</div>
            <div className='flex flex-row gap-4 h-[55vh] overflow-hidden'>
                <div className='border-[1px] border-gray-200 rounded-xl h-fit'>
                    <div className='p-5 border-b-[1px] border-gray-200 text-md font-semibold'>Portfolio Overview <p className='text-sm font-light text-gray-400'>See where your money is and how it's growing </p></div>
                    <div className='p-5 flex flex-col'>
                        <div>
                            <p className='text-sm font-light text-gray-400 pb-3'>Total Balance</p>
                            <p className='text-2xl font-semibold'>$10,000</p>
                            <div className='text-sm font-light text-gray-400 pb-3 flex items-center'>
                                <p>Earning(last 30days)</p><span className='p-1 text-green-500 bg-green-100 rounded-xl flex items-center mx-1'>+320% <FaArrowUp className='text-green-500 ml-1' /> </span>
                            </div>
                        </div>
                        <div className='flex gap-2 justify-center '>
                            <div className='border-[1px] border-gray-200 p-4 rounded-xl  w-[20vw]'>
                                <div className='bg-amber-100 w-10 h-10 rounded-full mb-3'></div>
                                <div className='mb-3'>Money Market</div>
                                <div className='flex justify-between'>
                                    <div>$4000</div><span className='p-1 text-green-500 text-xs bg-green-100 rounded-xl flex items-center mx-1'>+320% <FaArrowUp className='text-green-500 ml-1' /> </span>
                                </div>
                            </div>
                            <div className='border-[1px] border-gray-200 p-4 rounded-xl w-[20vw]'>
                                <div className='bg-amber-100 w-10 h-10 rounded-full mb-3'></div>
                                <div className='mb-3'>Money Market</div>
                                <div className='flex justify-between'>
                                    <div>$4000</div><span className='p-1 text-green-500 text-xs bg-green-100 rounded-xl flex items-center mx-1'>+320% <FaArrowUp className='text-green-500 ml-1' /> </span>
                                </div>
                            </div>
                            <div className='border-[1px] border-gray-200 p-4 rounded-xl  w-[20vw]'>
                                <div className='bg-amber-100 w-10 h-10 rounded-full mb-3'></div>
                                <div className='mb-3'>Money Market</div>
                                <div className='flex justify-between'>
                                    <div>$4000</div><span className='p-1 text-green-500 text-xs bg-green-100 rounded-xl flex items-center mx-1'>+320% <FaArrowUp className='text-green-500 ml-1' /> </span>
                                </div>
                            </div>

                        </div>
                        <div className='p-4 w-fit rounded-lg bg-[#1e3d34] text-white font-semibold mt-5 flex items-center gap-2 hover:gap-3 duration-300 cursor-pointer'>View Portfolio <FaArrowRight /></div>
                    </div>
                </div>
                <div className='border-[1px] border-gray-200 rounded-xl w-full'>
                    <div className='border-b-[1px] border-gray-200 p-5'>
                        <div className='text-md font-semibold'>Recent Activity</div>
                        <div className='text-sm text-gray-400'>Stay updated on what youv've recently</div>
                    </div>
                    <div className='border-b-[1px] border-gray-200 p-5'>
                        <div className='text-md font-semibold'>You invested $500 in 182-Day T-Bill
                        </div>
                        <div className='text-sm text-gray-400'>Today, 10:45 AM
                        </div>
                    </div>
                    <div className='border-b-[1px] border-gray-200 p-5'>
                        <div className='text-md font-semibold'>You invested $500 in 182-Day T-Bill
                        </div>
                        <div className='text-sm text-gray-400'>Today, 10:45 AM
                        </div>
                    </div>
                    <div className='border-b-[1px] border-gray-200 p-5'>
                        <div className='text-md font-semibold'>You invested $500 in 182-Day T-Bill
                        </div>
                        <div className='text-sm text-gray-400'>Today, 10:45 AM
                        </div>
                    </div>
                    <div className='border-b-[1px] border-gray-200 p-5'>
                        <div className='text-md font-semibold'>You invested $500 in 182-Day T-Bill
                        </div>
                        <div className='text-sm text-gray-400'>Today, 10:45 AM
                        </div>
                    </div>
                    <div className='border-b-[1px] border-gray-200 p-5'>
                        <div className='text-md font-semibold'>You invested $500 in 182-Day T-Bill
                        </div>
                        <div className='text-sm text-gray-400'>Today, 10:45 AM
                        </div>
                    </div>
                    <div className='border-b-[1px] border-gray-200 p-5'>
                        <div className='text-md font-semibold'>Recent Activity</div>
                        <div className='text-sm text-gray-400'>Stay updated on what youv've recently</div>
                    </div>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='mt-5 border-[1px] border-gray-200  rounded-xl w-fit'>
                    <div className='font-semibold border-b-[1px] border-gray-200 p-5 '>
                        Investment Options <p className='font-light text-gray-400 text-sm'>Explore smart, ready to-go investments.</p>
                    </div>
                    <div className='p-5'>
                        <div className='border-[1px] border-gray-200 p-4 rounded-xl  w-[20vw] mb-5'>
                            <div className='bg-amber-100 w-10 h-10 rounded-full mb-3'></div>
                            <div className='mb-3 font-semibold'>Money Market</div>
                            <div className=' justify-between  text-xs text-gray-400 flex items-center mx-1 mb-3 '>
                                <div>Maturity</div><span className='p-1 '>Average Returns</span>
                            </div>
                            <div className='flex justify-between'>
                                <div>30 - 90 days</div><span className='p-1 text-green-500 text-xs bg-green-100 rounded-xl flex items-center mx-1'>+320% <FaArrowUp className='text-green-500 ml-1' /> </span>
                            </div>
                        </div>
                        <div className='border-[1px] border-gray-200 p-4 rounded-xl  w-[20vw]'>
                            <div className='bg-amber-100 w-10 h-10 rounded-full mb-3'></div>
                            <div className='mb-3 font-semibold'>Money Market</div>
                            <div className=' justify-between  text-xs text-gray-400 flex items-center mx-1 mb-3 '>
                                <div>Maturity</div><span className='p-1 '>Average Returns</span>
                            </div>
                            <div className='flex justify-between'>
                                <div>30 - 90 days</div><span className='p-1 text-green-500 text-xs bg-green-100 rounded-xl flex items-center mx-1'>+320% <FaArrowUp className='text-green-500 ml-1' /> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 border-[1px] border-gray-200  rounded-xl w-fit h-fit'>
                    <div className='font-semibold border-b-[1px] border-gray-200 p-5 '>
                        Upcoming Returns <p className='font-light text-gray-400 text-sm'>Track returns from active investments.</p>
                    </div>
                    <table className="table-auto [&>*>*>*]:border-[1px] [&>*>*>*]:border-gray-200 [&>*>*>*]:p-3 [&>*>*>th]:bg-gray-300 [&>tbody>tr>td:last-child]:text-green-600 m-5">
                        <thead>
                            <tr>
                                <th>Asset</th>
                                <th>Amount Invested</th>
                                <th>Maturity Date</th>
                                <th>Expected Return</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>91 Day T-Bill</td>
                                <td>$200,000</td>
                                <td>Apr 30, 2025</td>
                                <td>+$12,400</td>
                            </tr>
                            <tr>
                                <td>Gov-Bond</td>
                                <td>$200,000</td>
                                <td>Apr 30, 2025</td>
                                <td>+$12,400</td>
                            </tr>
                            <tr>
                                <td>Gov-Bond</td>
                                <td>$200,000</td>
                                <td>Apr 30, 2025</td>
                                <td>+$12,400</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default HomeComp