import React from "react";
import { AfterLoginNavbar } from "./AfterLoginNavbar";
import { useNavigate } from "react-router-dom";
export const Seller = () => {
  const navigate= useNavigate()

const handleMoveSellerCreator=()=>{
  navigate(`/becomeseller/sellercretor/:srller_id`)

}


  return (
    <>
      <AfterLoginNavbar />
      <BannerVideo handleMoveSellerCreator={handleMoveSellerCreator} />
      <JoinTeam handleMoveSellerCreator={handleMoveSellerCreator} />
      <Work/>
    </>
  );
};

const BannerVideo = ({handleMoveSellerCreator}) => {
  return (
    <>
      <div className=" relative">
        <video
          className=""
          src="https://sg.fiverrcdn.com/packages_lp/cover_video.mp4"
          loop
          muted
          autoPlay="autoplay"
        ></video>
        <div className=" w-[100%] text-white absolute top-[50%] flex items-center flex-col gap-4">
          <h1 className="text-5xl font-bold">Work Your Way</h1>
          <p className=" font-medium text-3xl">
            You bring the skill. We'll make earning easy.
          </p>
          <button onClick={handleMoveSellerCreator} className="rounded-md mt-5 px-8 py-2 bg-[#1DBF73] hover:bg-[#12e783] font-semibold">
            Become a Seller
          </button>
          <div className="text-white bg-[#8D8A7F] w-full h-32 mt-28 flex items-center justify-around">
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl">A Gig is Bought Every</p>
              <p className="text-4xl font-medium">4 SEC</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl">Transactions</p>
              <p className="text-4xl font-medium">50M+</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl">Price Range</p>
              <p className="text-4xl font-medium">$5 - $10,000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default BannerVideo
// images
import freelancer1 from "../assets/freelance1.jpg";
import freelancer2 from "../assets/freelance2.jpg";
import freelancer3 from "../assets/freelance3.jpg";
import freelancer4 from "../assets/freelance4.jpg";
import freelancer5 from "../assets/freelance5.jpg";
import freelancer6 from "../assets/freelance6.jpg";
import freelancer7 from "../assets/freelance7.jpg";

import { FaHeart } from "react-icons/fa";
const JoinTeam = ({handleMoveSellerCreator}) => {
  return (
    <>
      <div className=" px-40 my-10">
        <h1 className="font-bold text-center text-4xl">
          Join our growing freelance community
        </h1>
        <div className=" grid grid-cols-4 gap-6 mt-10">
          <div className=" w-fit relative">
            <img
              src={freelancer1}
              alt=""
              className="w-[291px] h-[305px] object-cover"
            />
            <div className=" absolute top-[70%] left-[10%] z-10 text-2xl font-bold text-white">
              <p>I am</p>
              <p>a Designer</p>
            </div>
          </div>
          <div className=" w-fit relative">
            <img
              src={freelancer2}
              alt=""
              className="w-[291px] h-[305px] object-cover"
            />
            <div className=" absolute top-[70%] left-[10%] z-10 text-2xl font-bold text-white">
              <p>I am</p>
              <p>a Developer</p>
            </div>
          </div>
          <div className=" w-fit relative">
            <img
              src={freelancer3}
              alt=""
              className="w-[291px] h-[305px] object-cover"
            />
            <div className=" absolute top-[70%] left-[10%] z-10 text-2xl font-bold text-white">
              <p>I am</p>
              <p>a Writer</p>
            </div>
          </div>
          <div className=" w-fit relative">
            <img
              src={freelancer4}
              alt=""
              className="w-[291px] h-[305px] object-cover"
            />
            <div className=" absolute top-[70%] left-[10%] z-10 text-2xl font-bold text-white">
              <p>I am</p>
              <p>a Video Editor</p>
            </div>
          </div>
          <div className=" w-fit relative">
            <img
              src={freelancer5}
              alt=""
              className="w-[291px] h-[305px] object-cover"
            />
            <div className=" absolute top-[70%] left-[10%] z-10 text-2xl font-bold text-white">
              <p>I am</p>
              <p>a Musician</p>
            </div>
          </div>
          <div className=" w-fit relative">
            <img
              src={freelancer6}
              alt=""
              className="w-[291px] h-[305px] object-cover"
            />
            <div className=" absolute top-[70%] left-[10%] z-10 text-2xl font-bold text-white">
              <p>I am</p>
              <p>a Voiceover Artist</p>
            </div>
          </div>
          <div className=" w-fit relative">
            <img
              src={freelancer7}
              alt=""
              className="w-[291px] h-[305px] object-cover"
            />
            <div className=" absolute top-[70%] left-[10%] z-10 text-2xl font-bold text-white">
              <p>I am a Social Media Marketer</p>
              <p></p>
            </div>
          </div>
          <div className="w-[291px] h-[305px] relative bg-[#EEEEEE]">
            <div className="flex flex-col items-center absolute top-[25%] left-[20%]">
              <FaHeart className="w-8 h-8 text-red-500" />
              <p className="text-[#555555] text-2xl font-semibold">What's</p>
              <p className="text-[#555555] text-2xl font-semibold">
                Your Skill?
              </p>
              <button onClick={handleMoveSellerCreator} className=" mt-6 text-white bg-[#1DBF73] px-6 py-1.5 font-semibold rounded-md hover:bg-[#23aa6b]">
                Become a Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";

const Work = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] px-40 py-10">
        <h1 className="text-4xl text-black text-center font-bold">How it works</h1>
        <div className="flex mt-16">
          <div className="flex flex-col items-center text-center">
            <IoNewspaperOutline className="w-14 h-14"/>
            <p className="text-[#555555] text-2xl font-bold">1. Create a Gig</p>
            <p className="text-[#555555] font-medium">Sign up for free, set up your Gig, and offer your work to our global audience.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MdOutlineMarkEmailRead className="w-14 h-14"/>
            <p className="text-[#555555] text-2xl font-bold">2. Deliver great work</p>
            <p className="text-[#555555] font-medium">Get notified when you get an order and use our system to discuss details with customers.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LuClipboardCheck className="w-14 h-14"/>
            <p className="text-[#555555] text-2xl font-bold">3. Get paid</p>
            <p className="text-[#555555] font-medium">Get paid on time, every time. Payment is available for withdrawal as soon as it clears.</p>
          </div>
        </div>
      </div>
    </>
  );
};


const LearnFv = () => {
  return (
    <>
    <div className="border">

    </div>
    </>
  )
}

export default BannerVideo;
JoinTeam; Work; LearnFv;





