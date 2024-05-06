import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import poster01 from "../assets/poster01.webp";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export const Marketing = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState([]);

  const fettchData = async () => {
    try {
      await axios
        .get(`https://fiverr-orkg.onrender.com/service/cofounders`)
        .then((res) => {
          setData(res.data.services);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fettchData();
  }, []);

  return (
    <>
      <div className="slider-container mx-20 mt-24">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item._id}>
              <div className="flex items-center justify-around">
                <div className="w-[34em]">
                  <video
                    src={item.video[0]}
                    poster={item.video[1]}
                    controls
                    preload="auto"
                  ></video>
                </div>

                <div className="w-1/2 flex flex-col gap-5">
                  <div className="flex items-center">
                    <h2 className="text-xl text-[#74767E]">{item.title} | </h2>
                    <img
                      src={item.logo}
                      alt="logo"
                      className="w-36 h-8 border"
                    />
                  </div>
                  <blockquote>
                    <em className="text-3xl font-medium text-[#003912]">
                      {item.details}
                    </em>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Poster />
    </>
  );
};

export const Poster = () => {
  return (
    <>
      <div className="mx-20 my-20">
        <div className="bg-[#446EE7] relative  ">
          <div className=" absolute mt-10 left-10 text-white">
            <h1 className="font-bold text-3xl ">
              fiverr <span className="font-normal">logo maker.</span>
            </h1>
            <h1 className="mt-5 font-bold text-4xl">Make an incredible logo</h1>
            <em className="text-4xl">in minutes</em>
            <p className="font-semibold mt-2 text-lg">
              Pre-designed by top talent. Just add your touch.
            </p>
            <button className=" mt-6 px-6 py-2 font-semibold rounded-md text-[#446EE7] bg-white hover:bg-slate-200">
              Try Fiverr Logo Maker
            </button>
          </div>
          <div className="">
            <img src={poster01} alt="poster" className="" />
          </div>
        </div>
      </div>
    </>
  );
};
