import React from "react";
import { BsMagic } from "react-icons/bs";
import { TfiBag } from "react-icons/tfi";
export const Welcome = ({user}) => {
  // console.log(user);
  return (
    <>
      <div className="rounded-2xl text-white bg-[#004215] px-8 py-10">
        <h1 className="font-bold text-3xl">Welcome back, {user}👋</h1>
        <div className="flex flex-row justify-between mt-10 ">
          <div className="flex flex-col gap-2 bg-[#245834] p-4 rounded-md">
            <p className="font-semibold text-">RECOMMENDED FOR YOU</p>
            <div>
              <div className="flex items-center w-[600px] justify-between">
                <div className="w-10 h-10 flex items-center border rounded-full bg-[#233D2D]">
                  <BsMagic className="h-5 w-5 m-auto" />
                </div>
                <div className="w-[350px]">
                  <p className="font-medium text-lg">
                    Get matched with freelancers
                  </p>
                  <p className="font-medium">
                    Create a brief and get custom offers.
                  </p>
                </div>
                <button className="border px-4 py-1 rounded-md font-bold">
                  Create a brief
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-[#245834] p-4 rounded-md">
            <p className="font-semibold text-">BUSINESS RECOMMENDATIONS</p>
            <div>
              <div className="flex items-center w-[600px] justify-between">
                <div className="w-10 h-10 flex items-center border rounded-full bg-[#233D2D]">
                  <TfiBag className="h-5 w-5 m-auto" />
                </div>
                <div className="w-[350px]">
                  <p className="font-medium text-lg">
                    Tailor Fiverr to your needs
                  </p>
                  <p className="font-medium">
                    Tell us a bit about your business.
                  </p>
                </div>

                <button className="border px-4 py-1 rounded-md font-bold">
                  Add your info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
