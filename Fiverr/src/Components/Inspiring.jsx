import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./Inspiring.module.css";

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

export const Inspiring = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
        .get(`https://fiverr-orkg.onrender.com/service/inspiring`)
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
    <div className="bg-[#F5F5F5] px-20 border pt-20 ">
      <div className="slider-container">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#404145]">
            Inspiring work made on Fiverr
          </h1>
          <div className="flex items-center gap-4 ">
            <a href="#" className="text-[#446EE7] text-lg">
              See more{" "}
            </a>
            <MdKeyboardArrowRight className="text-[#446EE7] text-xl" />
          </div>
        </div>
        <Slider {...settings} className={`my-5 py-3 ${styles.slick_list}`}>
          {data.map((ele) => (
            <div key={ele._id} className="bg-white shadow-sm ">
              <img src={ele.image} alt="" className="h-[237px] w-[306px]" />
              <div className="flex gap-2 mx-3 py-4">
                <img
                  src={ele.logo}
                  alt="user logo"
                  className=" w-[40px] h-[40px] rounded-full"
                />
                <p className=" text-sm font-semibold text-[#9B9DA2]">
                  {ele.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
