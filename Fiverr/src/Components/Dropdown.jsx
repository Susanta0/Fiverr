import React, { useState } from "react";

export const Dropdown = ({ textColor }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <>
      <div className="menu flex flex-row mx-20 py-2 justify-between">
        {[
          "Graphics & Design",
          "Programming & Tech",
          "Digital Marketing",
          "Video & Animation",
          "Writing & Translation",
          "Music & Audio",
          "Business",
          "Consulting",
          "Data",
          "AI Services",
        ].map((ele) => (
          <p
          key={ele}
            className={`heading font-semibold text-[#6C6E74] cursor-pointer ${
              textColor ? " visible" : " hidden"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {ele}
          </p>
        ))}
      </div>
      {isDropdownVisible && <DropdownMenu />}
    </>
  );
};

const DropdownMenu = () => {
  return (
    <div className=" mx-20 flex flex-row justify-between">
      <ul className=" flex flex-col gap-5 font-semibold">
        <h3>Logo & Brand Identity</h3>
        <li className="text-[#85878B]">
          <a href="">Logo Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Brand Style Guides</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Business Cards & Stationery</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Fonts & Typography</a>
        </li>
        <li className=" text-blue-600">
          <a href="">Logo Maker Tool</a>
        </li>
        <h3>Art & Illustration</h3>
        <li className="text-[#85878B]">
          <a href="">Illustration</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">AI Artists</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">AI Avatar DesignNEW</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Children's Book Illustration</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Portraits & Caricatures</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Cartoons & Comics</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Tattoo Design</a>
        </li>
      </ul>

      <ul className=" flex flex-col gap-5 font-semibold">
        <h3>Web & App Design</h3>
        <li className="text-[#85878B]">
          <a href="">Website Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">App Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">UX Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Landing Page Design</a>
        </li>
        <li className=" text-[#85878B]">
          <a href="">Icon Design</a>
        </li>
        <h3>Industrial & Product Design</h3>
        <li className="text-[#85878B]">
          <a href="">Character Modeling</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">AI Artists</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Game Art</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Graphics for Streamers</a>
        </li>
        <h3>Print Design</h3>
        <li className="text-[#85878B]">
          <a href="">Flyer Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Brochure Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Poster Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Catalog Design</a>
        </li>
      </ul>
      <ul className=" flex flex-col gap-5 font-semibold">
        <h3>Visual Design</h3>
        <li className="text-[#85878B]">
          <a href="">Image Editing</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Brand Style Guides</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Presentation Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Background Removal</a>
        </li>
        <li className=" text-[#85878B]">
          <a href="">Logo Maker Tool</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Resume Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Vector Tracing</a>
        </li>
        <h3>Marketing Design</h3>
        <li className="text-[#85878B]">
          <a href="">Social Media Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Social Posts & Banners</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Email Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Web Banners</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Tattoo Design</a>
        </li>
        <h3>Packaging & Covers</h3>
        <li className="text-[#85878B]">
          <a href="">Packaging & Label Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Book Design</a>
        </li>
      </ul>

      <ul className=" flex flex-col gap-5 font-semibold">
        <h3>Visual Design</h3>
        <li className="text-[#85878B]">
          <a href="">Image Editing</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Presentation Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Background Removal</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Infographic Design</a>
        </li>
        <li className=" text-blue-600">
          <a href="">Vector Tracing</a>
        </li>
        <h3>Marketing Design</h3>
        <li className="text-[#85878B]">
          <a href="">Social Media Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Social Posts & Banners</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Web Banners</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Signage Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Packaging & Covers</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Packaging & Label Design</a>
        </li>
      </ul>
      <ul className=" flex flex-col gap-5 font-semibold">
        <h3>Architecture & Building Design</h3>
        <li className="text-[#85878B]">
          <a href="">Architecture & Interior Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Landscape Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Building Engineering</a>
        </li>
        <h3>Fashion & Merchandise</h3>
        <li className=" text-[#85878B]">
          <a href="">T-Shirts & Merchandise</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Illustration</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">AI Artists</a>
        </li>
        <h3>3D Design</h3>
        <li className="text-[#85878B]">
          <a href="">3D Architecture</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">3D Industrial Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">3D Fashion & Garment</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">3D Printing Characters</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">3D Landscape</a>
        </li>
      </ul>
      <ul className=" flex flex-col gap-5 font-semibold">
        <h3>Logo & Brand Identity</h3>
        <li className="text-[#85878B]">
          <a href="">Logo Design</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Brand Style Guides</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Business Cards & Stationery</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Fonts & Typography</a>
        </li>
        <li className=" text-blue-600">
          <a href="">Logo Maker Tool</a>
        </li>
        <h3>Art & Illustration</h3>
        <li className="text-[#85878B]">
          <a href="">Illustration</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">AI Artists</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">AI Avatar DesignNEW</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Children's Book Illustration</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Portraits & Caricatures</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Cartoons & Comics</a>
        </li>
        <li className="text-[#85878B]">
          <a href="">Tattoo Design</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
