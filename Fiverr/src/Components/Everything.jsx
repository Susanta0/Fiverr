import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

import fiver from "../assets/fiver.mp4";
import poster from "../assets/frame.png";
export const Everything = () => {
  return (
    <>
      <div className="mt-20 px-20 py-20 bg-[#F1FDF7] flex items-center gap-20">
        <div>
          <h1 className="text-4xl font-bold text-[#404145] ">
            The best part? Everything.
          </h1>
          <div className=" flex flex-col gap-5 mt-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <FaRegCheckCircle className="w-6 h-6 text-[#7A7D85]" />
                <h3 className=" text-[#404145] font-bold text-lg">
                  Stick to your budget
                </h3>
              </div>
              <p className="text-lg font-semibold text-[#62646A]">
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <FaRegCheckCircle className="w-6 h-6 text-[#7A7D85]" />
                <h3 className=" text-[#404145] font-bold text-lg">
                  Get quality work done quickly
                </h3>
              </div>
              <p className="text-lg font-semibold text-[#62646A]">
                Hand your project over to a talented freelancer in minutes, get
                long-lasting results.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <FaRegCheckCircle className="w-6 h-6 text-[#7A7D85]" />
                <h3 className=" text-[#404145] font-bold text-lg">
                  Pay when you're happy
                </h3>
              </div>
              <p className="text-lg font-semibold text-[#62646A]">
                Upfront quotes mean no surprises. Payments only get released
                when you approve.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <FaRegCheckCircle className="w-6 h-6 text-[#7A7D85]" />
                <h3 className="text-[#404145] font-bold text-lg">
                  Count on 24/7 support
                </h3>
              </div>
              <p className="text-lg font-semibold text-[#62646A]">
                Our round-the-clock support team is available to help anytime,
                anywhere.
              </p>
            </div>
          </div>
        </div>
        <div>
         
          <video controls poster={poster}>
            <source src={fiver} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
