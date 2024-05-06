import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Popular.module.css";

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

export const Grow = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
        .get(`https://fiverr-orkg.onrender.com/service/guides`)
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
      <div className="bg-[#FFFF] px-20 py-14 ">
        <div className="slider-container ">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#404145]">
              Guides to help you grow
            </h1>
            <div className="">
              <a href="#" className="text-base hover:underline">
                See more{" "}
              </a>
            </div>
          </div>
          <Slider {...settings} className={`my-5 py-3 ${styles.slick_list}`}>
            {data.map((ele) => (
              <div key={ele._id}>
                <img src={ele.image} alt="" className="w-[434px] h-[304px]" />
                <p className="text-lg font-bold mt-4">{ele.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Service />
    </>
  );
};

// image
import service from "../assets/service.png";

export const Service = () => {
  return (
    <>
      <div className="px-20 pb-24">
        <div className="rounded-sm">
          <div className=" absolute text-white left-[10%] mt-32 flex flex-col gap-7 ">
            <h1 className="text-5xl font-bold">Freelance services at your</h1>
            <em className="text-5xl">fingertips!</em>
            <button className="w-fit text-1xl font-medium px-5 py-1.5 rounded-sm bg-[#1DBF73] hover:bg-[#0aab60]">
              Jion Fiverr
            </button>
          </div>
          <img src={service} alt="logo" className="rounded-sm" />
        </div>
      </div>
    </>
  );
};
