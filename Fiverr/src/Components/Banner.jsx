import { IoSearchOutline } from "react-icons/io5";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import  { Component } from "react";
import Slider from "react-slick";

// images
import slider1 from "../assets/banner1.jpg";
import slider2 from "../assets/banner2.jpg";
import slider3 from "../assets/banner3.jpg";
import slider4 from "../assets/banner4.jpg";
import slider5 from "../assets/banner5.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export const Banner = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="slider-container relative top-0 ">

        <div className=" absolute z-10 mt-[20%] left-20 w-[43em]">
          <h1 className=" text-5xl font-bold text-white">
            Find the right <em className=" font-normal">freelance</em> service,
            right away
          </h1>
          <div className=" flex items-center mt-12">
            <input
              type="search"
              className="w-[43em] h-12 pl-5 bg-white rounded-l-sm"
              placeholder="Search for any service..."
            />
            <div className=" w-20 bg-[#1DBF73] rounded-r-sm flex justify-center h-12 items-center">
              <IoSearchOutline className=" w-[1.5em] h-8 text-white " />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <p className=" text-sm font-semibold text-white">Popular:</p>
            <button className=" border rounded-2xl py-[.1em] px-2 text-sm font-semibold hover:bg-white hover:text-black text-white">
              Website Design
            </button>
            <button className=" border rounded-2xl py-[.1em] px-2 text-sm font-semibold hover:bg-white hover:text-black text-white">
              WordPress
            </button>
            <button className=" border rounded-2xl py-[.1em] px-2 text-sm font-semibold hover:bg-white hover:text-black text-white">
              Logo Design
            </button>
            <button className=" border rounded-2xl py-[.1em] px-2 text-sm font-semibold hover:bg-white hover:text-black text-white">
              Ai Services
            </button>
          </div>
        </div>

        <Slider {...settings}>
          <div>
            <img src={slider1} alt="" />
          </div>
          <div>
            <img src={slider2} alt="" />
          </div>
          <div>
            <img src={slider3} alt="" />
          </div>
          <div>
            <img src={slider4} alt="" />
          </div>
          <div>
            <img src={slider5} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

// images
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
export default function Company() {
  return (
    <>
      <div className="flex justify-center items-center gap-14 py-3 bg-[#F5F5F5]">
        <h2 className="font-bold text-gray-400">Trusted by:</h2>
        <img src={company1} alt="" />
        <img src={company2} alt="" />
        <img src={company3} alt="" />
        <img src={company4} alt="" />
        <img src={company5} alt="" />
      </div>
    </>
  );
}
