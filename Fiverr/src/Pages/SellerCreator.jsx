import React from 'react'
import { AfterLoginNavbar } from '../Components/AfterLoginNavbar'

export const SellerCreator = () => {
  return (
    <>
    <AfterLoginNavbar hide="none"/>
    <SellerCreatorStep1/>
    </>
  )
}

import { LuBookMarked } from "react-icons/lu";
import { LuUserCircle2 } from "react-icons/lu";
import { BsShop } from "react-icons/bs";
// video & image
import video from "../assets/Sellervideo HQ.mp4"
import image from "../assets/sellerBanner.png"
import { useNavigate } from 'react-router-dom';
export const SellerCreatorStep1=()=>{
  const navigate=useNavigate()
  const next1=()=>{
    navigate(`/becomeseller/sellercretor/srller_id/overview`)
  }
  return(
    <>
    <div className=' absolute w-full top-28 m-auto  px-40 flex items-center gap-40'>
      <div className=''>
        <h1 className='text-3xl font-semibold'>Ready to start selling on Fiverr? <br /> Here’s the breakdown:</h1>
        <div className='mt-10 flex flex-col'>
          <div className='flex gap-6 items-center border-t py-4'>
            <LuBookMarked className='text-[#5F656D] w-12 h-12'/>
            <div>
              <h1 className='text-[#303030] font-bold text-lg'>Learn what makes a successful profile</h1>
              <p className='text-[#73747A] font-medium'>Discover the do’s and don’ts to ensure you’re always on the <br /> right track.</p>
            </div>
          </div>
          <div className='flex gap-6 items-center border-t py-4'>
            <LuUserCircle2 className='text-[#5F656D] w-12 h-12'/>
            <div>
              <h1 className='text-[#303030] font-bold text-lg'>Create your seller profile</h1>
              <p className='text-[#73747A] font-medium'>Add your profile picture, description, and professional <br /> information.</p>
            </div>
          </div>
          <div className='flex gap-6 items-center border-t py-4 border-b'>
            <BsShop className='text-[#5F656D] w-12 h-12'/>
            <div>
              <h1 className='text-[#303030] font-bold text-lg'>Publish your Gig</h1>
              <p className='text-[#73747A] font-medium'>Create a Gig of the service you’re offering and start selling <br /> instantly.</p>
            </div>
          </div>
        </div>
        <button onClick={next1} className=' mt-6 font-semibold text-white bg-[#1DBF73] px-12 py-3 rounded-sm hover:shadow-xl'>Continue</button>
      </div>
      <div>
        <video src={video} poster={image} controls></video>
        </div>
    </div>
    </>
  )
}