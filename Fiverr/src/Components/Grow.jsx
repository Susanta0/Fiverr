import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Popular.module.css";
// images
import g1 from "../assets/g1.jpeg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";

const guidesData = [
  {
    id: 1,
    image: `${g1}`,
    title: "Start a side business",
  },
  {
    id: 2,
    image: `${g2}`,
    title: "Ecommerce business Ideas",
  },
  {
    id: 3,
    image: `${g3}`,
    title: "Start an online business and work from home",
  },
  {
    id: 4,
    image: `${g4}`,
    title: "Build a website from scratch",
  },
  {
    id: 5,
    image: `${g5}`,
    title: "Grow your business with AI",
  },
  {
    id: 6,
    image: `${g6}`,
    title: "Create a logo for your business",
  },
];
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
      await axios.get(guidesData).then((res) => {
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
            <div key={ele.id}>
              <img src={ele.image} alt="" className="w-[434px] h-[304px]" />
              <p className="text-lg font-bold mt-4">{ele.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <Service/>
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
            <button className="w-fit text-1xl font-medium px-5 py-1.5 rounded-sm bg-[#1DBF73] hover:bg-[#0aab60]">Jion Fiverr</button>
          </div>
          <img src={service} alt="logo" className="rounded-sm" />
        </div>
      </div>
    </>
  );
};
