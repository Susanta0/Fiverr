import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./Inspiring.module.css";
// images
import inspiring1 from "../assets/Inspiring1.jpeg";
import inspiring2 from "../assets/Inspiring2.jpeg";
import inspiring3 from "../assets/Inspiring3.jpeg";
import inspiring4 from "../assets/Inspiring4.png";
import inspiring5 from "../assets/Inspiring5.jpeg";
import inspiring6 from "../assets/Inspiring6.jpeg";
import inspiring7 from "../assets/Inspiring7.jpeg";
import inspiring8 from "../assets/Inspiring8.jpeg";
import inspiring9 from "../assets/Inspiring9.jpeg";

// logos
import insLogo1 from "../assets/insLogo1.webp";
import insLogo2 from "../assets/insLogo2.webp";
import insLogo3 from "../assets/insLogo3.webp";
import insLogo4 from "../assets/insLogo4.webp";
import insLogo5 from "../assets/insLogo5.webp";
import insLogo6 from "../assets/insLogo6.webp";
import insLogo7 from "../assets/insLogo7.webp";
import insLogo8 from "../assets/insLogo8.webp";

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
let inspiring = [
  {
    id: 1,
    image: `${inspiring1}`,
    logo: `${insLogo1}`,
    title: "Product Photographyby passionshake",
  },
  {
    id: 2,
    image: `${inspiring2}`,
    logo: `${insLogo2}`,
    title: "Logo Designby bruno_malagrino",
  },
  {
    id: 3,
    image: `${inspiring3}`,
    logo: `${insLogo3}`,
    title: "Animated GIFsby lamonastudio",
  },
  {
    id: 4,
    image: `${inspiring4}`,
    logo: `${insLogo4}`,
    title: "Packaging Designby mijalzagier",
  },
  {
    id: 5,
    image: `${inspiring5}`,
    logo: `${insLogo5}`,
    title: "Portraits & Caricaturesby noneyn",
  },
  {
    id: 6,
    image: `${inspiring6}`,
    logo: `${insLogo2}`,
    title: "Flyer Designby spickex",
  },
  {
    id: 7,
    image: `${inspiring7}`,
    logo: `${insLogo6}`,
    title: "Social Media Designby fernandobengua",
  },
  {
    id: 8,
    image: `${inspiring8}`,
    logo: `${insLogo7}`,
    title: "Web & Mobile Designby skydesigner",
  },
  {
    id: 9,
    image: `${inspiring9}`,
    logo: `${insLogo8}`,
    title: "Logo Designby eveeelin",
  },
];

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
      await axios.get(inspiring).then((res) => {
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
            <div key={ele.id} className="bg-white shadow-sm ">
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
