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

export const Allgigs = ({heading, style, color}) => {
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
    
      const fetchData = async (token) => {
        try {
          const res =await axios.get(`https://fiverr-orkg.onrender.com/gigs/showgig`,{
            headers: {
              Authorization: `Bearer ${token}`
          }
          })
            console.log(res.data.gigDetails);
            setData(res.data.gigDetails)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token){
          window.location.href="/"
        }else{

          fetchData(token);
        }
      }, []);
    
  return (
    <>
        <div className="slider-container mx-20 mt-24 ">
      <h1 className={`${style} font-bold ${color}`}>{heading}</h1>
      <Slider
        {...settings}
        className={`my-5 py-3 ${styles.slick_list}`}
      >
        {data.map((ele) => (
          <div key={ele._id} className=" w-[260.4px]">
            <img src={ele.posterImages[0]} alt="image" className="w-[285.4px] h-[143.4px] m-auto rounded-md"/>
            <div className=" flex items-center flex-row gap-2">
              <img src={ele.logo} alt="logo" className="rounded-full w-[24px] h-[24px]" />
              <p className=" font-bold hover:underline text-sm">{ele.userName}</p>
            </div>
            <p className=" font-medium hover:underline text-[#4F5054]">{ele.title.slice(0, 60)}</p>
            <p className=" font-bold mt-2">{ele.review}</p>
            <p className=" font-bold mt-2">From {ele.price}</p>
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}