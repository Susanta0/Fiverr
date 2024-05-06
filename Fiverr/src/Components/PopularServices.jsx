import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// images
import services1 from "../../public/assets/services1.png"
import services2 from "../assets/services2.png"
import services3 from "../assets/services3.png"
import services4 from "../assets/services4.png"
import services5 from "../assets/services5.png"
import services6 from "../assets/services6.png"
import services7 from "../assets/services7.png"
import services8 from "../assets/services8.png"
import services9 from "../assets/services9.png"
import services10 from "../assets/services10.png"
import services11 from "../assets/services11.png"

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
let services=[
  {
      id:1,
      image:`${services1}`,
      title:"Add talent to AI",
      catagory:"AI Artists"
  },
  {
      id:2,
      image:`${services2}`,
      title:"Build your brand",
      catagory:"Logo Design"
  },
  {
      id:3,
      image:`${services3}`,
      title:"Customize your site",
      catagory:"WordPress"
  },
  {
      id:4,
      image:`${services4}`,
      title:"Share your message",
      catagory:"Voice Over"
  },
  {
      id:5,
      image:`${services5}`,
      title:"Engage your audience",
      catagory:"Video Explainer"
  },
  {
      id:6,
      image:`${services6}`,
      title:"Reach more customers",
      catagory:"Social Media"
  },
  {
      id:7,
      image:`${services7}`,
      title:"Unlock growth online",
      catagory:"SEO"
  },
  {
      id:8,
      image:`${services8}`,
      title:"Color your dreams",
      catagory:"LLLustration"
  },
  {
      id:9,
      image:`${services9}`,
      title:"Go global",
      catagory:"Translation"
  },
  {
      id:10,
      image:`${services10}`,
      title:"Learn your business",
      catagory:"Data Entry"
  },
  {
      id:11,
      image:`${services11}`,
      title:"Showcase your story",
      catagory:"Book Covers"
  }
]

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
      await axios.get(services).then((res) => {
        setData(res.config.url);
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
      <Slider
        {...settings}
        className={`my-5 py-3 ${styles.slick_list}`}
      >
        {data.map((ele) => (
          <div key={ele.id} className="relative">
            <div className=" absolute left-[6%] top-[4%]">
            <h2 className=" font-medium text-white">
              {ele.title}
            </h2>
            <h1 className=" font-bold text-white text-2xl">
              {ele.catagory}
            </h1>
            </div>
            <img src={ele.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
