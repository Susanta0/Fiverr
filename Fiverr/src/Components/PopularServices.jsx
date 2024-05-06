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

export const PopularServices = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
        .get(`https://fiverr-orkg.onrender.com/service/services`)
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
    <div className="slider-container mx-20 mt-24 ">
      <h1 className="text-4xl font-bold text-[#404145]">Popular services</h1>
      <Slider {...settings} className={`my-5 py-3 ${styles.slick_list}`}>
        {data.map((ele) => (
          <div key={ele._id} className="relative">
            <div className=" absolute left-[6%] top-[4%]">
              <h2 className=" font-medium text-white">{ele.title}</h2>
              <h1 className=" font-bold text-white text-2xl">{ele.details}</h1>
            </div>
            <img src={ele.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
