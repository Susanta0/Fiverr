import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// videos
import sliderVideo1 from "../assets/sliderVideo1.mp4";
import sliderVideo2 from "../assets/sliderVideo2.mp4";
import sliderVideo3 from "../assets/sliderVideo3.mp4";
// images
import sliderFrame1 from "../assets/sliderFrame1.png";
import sliderFrame2 from "../assets/sliderFrame2.png";
import sliderFrame3 from "../assets/sliderFrame3.png";
import sliderFrame4 from "../assets/sliderFrame4.png";
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

const sliderContent = [
  {
    id: 1,
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg",
    video: `${sliderVideo1}`,
    heading: "Tim and Dan Joo, Co-Founders",
    logo: `${sliderFrame1}`,
    details: `"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."`,
  },
  {
    id: 2,
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg",
    video: `${sliderVideo2}`,
    heading: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
    logo: `${sliderFrame2}`,
    details: `"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."`,
  },
  {
    id: 3,
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
    video: `${sliderVideo3}`,
    heading: "Kay Kim, Co-Founder",
    logo: `${sliderFrame3}`,
    details: `"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."`,
  },
  {
    id: 4,
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg",
    video: "",
    heading: "Caitlin Tormey, Chief Commercial Officer",
    logo: `${sliderFrame4}`,
    details: `"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."`,
  },
];

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
      await axios.get(sliderContent).then((res) => {
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
      <div className="slider-container mx-20 mt-24">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <div className="flex items-center">
                <div className="w-1/2">
                  <video
                    src={item.video}
                    poster={item.image}
                    controls
                    preload="auto"
                  ></video>
                </div>

                <div className="w-1/2 flex flex-col gap-5">
                  <div className="flex items-center">
                    <h2 className="text-xl text-[#74767E]">
                      {item.heading} |{" "}
                    </h2>
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
