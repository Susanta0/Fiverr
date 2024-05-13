import React from 'react'
import { AfterLoginNavbar } from './AfterLoginNavbar'
import { useNavigate } from 'react-router-dom'
// icons
import { LiaIdCardAltSolid } from "react-icons/lia";
import { HiLink } from "react-icons/hi2";
import { RiFilePaper2Line } from "react-icons/ri";
import { LiaUserPlusSolid } from "react-icons/lia";
import { MdLockOutline } from "react-icons/md";
// image
import boy from "../assets/boy.png"


export const Overview = () => {
    const navigate=useNavigate()
    const next2=()=>{
        navigate(`/becomeseller/sellercretor/srller_id/overview/do`)
    }

  return (
    <>
    <AfterLoginNavbar hide="none"/>
    <OverviewDashbord 
    image={boy}
    heading="What makes a successful Fiverr profile?"
    paragraph="Your first impression matters! Create a profile that will stand out from the crowd on Fiverr."
    icon1={<LiaIdCardAltSolid className='w-10 h-10 text-[#65676D]'/>}
    iconPara1="Take your time in creating your profile so it’s exactly as you want it to be."
    icon2={<HiLink className='w-10 h-10 text-[#65676D]'/>}
    iconPara2="Add credibility by linking out to your relevant professional networks."
    icon3={<RiFilePaper2Line className='w-10 h-10 text-[#65676D]'/>}
    iconPara3="Accurately describe your professional skills to help you get more work."
    icon4={<LiaUserPlusSolid className='w-10 h-10 text-[#65676D]'/>}
    iconPara4="Put a face to your name! Upload a profile picture that clearly shows your face."
    icon5={<MdLockOutline className='w-10 h-10 text-[#65676D]'/>}
    iconPara5="To keep our community secure for everyone, we may ask you to verify your ID."
    nextNavigateLink={next2}
    backNavigateLink="/becomeseller/sellercretor/srller_id"
    />
    </>
  )
}


export const OverviewDashbord = ({image, backNavigateLink, nextNavigateLink, heading, paragraph, icon1, icon2, icon3, icon4, icon5, iconPara1, iconPara2, iconPara3, iconPara4, iconPara5}) => {
    

  return (
    <>
    <div className='px-32 flex items-center absolute top-20 gap-20'>
    <div>
        <img src={image} alt="poster" className='w-[420px] h-[580px]'/>
    </div>
    <div>
        <h1 className='text-3xl font-bold'>{heading}</h1>
        <p className='text-[#65676D] font-semibold'>{paragraph}</p>
        <div className=' grid grid-cols-3  mt-10'>
            <div className='w-[257px] h-[159px] pr-8'>
                {icon1}
                <p className='text-[#65676D] font-semibold'>{iconPara1}</p>
            </div>
            <div className='w-[257px] h-[159px] pr-8'>
                {icon2}
                <p className='text-[#65676D] font-semibold'>{iconPara2}</p>
            </div>
            <div className='w-[257px] h-[159px] pr-8'>
                {icon3}
                <p className='text-[#65676D] font-semibold'>{iconPara3}</p>
            </div>
            <div className='w-[257px] h-[159px] pr-8'>
                {icon4}
                <p className='text-[#65676D] font-semibold'>{iconPara4}</p>
            </div>
            <div className='w-[257px] h-[159px] pr-8'>
                {icon5}
                <p className='text-[#65676D] font-semibold'>{iconPara5}</p>
            </div>
        </div>
        <div className='flex items-center gap-6'>
            <button onClick={nextNavigateLink} className='font-bold px-12 py-3 bg-[#1DBF73] text-white rounded-sm hover:shadow-xl'>Continue</button>
            <a href={backNavigateLink} className='text-[#5F83EB] hover:underline'>Back</a>
        </div>
    </div>
    </div>
    
    </>
  )
}



