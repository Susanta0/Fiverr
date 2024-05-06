import React from 'react'
import fiverrPro from "../assets/fiverrPro.png"
export const FiverrPro = () => {
  return (
    <>
    <div className='px-20 py-20 bg-[#0D084D] flex items-center'>
        <div>
        <div className='text-white flex flex-col gap-6 w-[37em]'>
            <h1 className='font-bold text-5xl'>Fiverr <span className=' font-normal'>pro.</span></h1>
            <p className='text-5xl'>We're here for your <br/><strong>e-Commerce</strong> everything</p>
            <div>
                <h3 className='font-bold text-lg'>Get a project manager</h3>
                <p className='text-md font-medium'>to guide you through each stage of launching your e-Commerce business</p>
            </div>
            <div>
                <h3 className='font-bold text-lg'>Accelerate time-to-market</h3>
                <p className='text-md font-medium'>with a dedicated team of top-tier freelance experts</p>
            </div>
            <div>
                <h3 className='font-bold text-lg'>Optimize your budget</h3>
                <p className='text-md font-medium'>with a dedicated project manager who will handle all your tasks, leaving you more money for marketing and growth</p>
            </div>
        </div>
        <button className='text-white mt-10 px-7 py-2 font-bold bg-[#FC832B] rounded-md hover:bg-[#e3620b]'>Get Started</button>
        </div>
        <div>
        <img src={fiverrPro} alt="" />
        </div>
    </div>
    </>
  )
}
