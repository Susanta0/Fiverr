import React from "react";
import { AfterLoginNavbar } from "./AfterLoginNavbar";
import { OverviewDashbord } from "./Overview";

// icons
import { RiInformation2Line } from "react-icons/ri";
import { IoIosDesktop } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiLockersBold } from "react-icons/pi";
// image
import studyPic from "../assets/studyPic.jpeg";
import { useNavigate } from "react-router-dom";
export const Overview2 = () => {
  const navigate = useNavigate();
  const next3 = () => {
    navigate(`/becomeseller/sellercretor/srller_id/overview/do/personal_info`);
  };
  const backNavigateLink=()=>{
    navigate(`/becomeseller/sellercretor/srller_id/overview`)
}
  return (
    <>
      <AfterLoginNavbar hide="none" />
      <OverviewDashbord
        image={studyPic}
        heading="Now, let’s talk about the things you want to steer clear of."
        paragraph="Your success on Fiverr is important to us. Avoid the following to keep in line with our community standards:"
        icon1={<RiInformation2Line className="w-10 h-10 text-[#65676D]" />}
        iconPara1="Providing any misleading or inaccurate information about your identity."
        icon2={<IoIosDesktop className="w-10 h-10 text-[#65676D]" />}
        iconPara2="Opening duplicate accounts. Remember, you can always create more Gigs."
        icon3={<MdOutlineWorkOutline className="w-10 h-10 text-[#65676D]" />}
        iconPara3="Soliciting other community members for work on Fiverr."
        icon4={<PiLockersBold className="w-10 h-10 text-[#65676D]" />}
        iconPara4="Requesting to take communication and payment outside of Fiverr."
        icon5={null}
        iconPara5=""
        nextNavigateLink={next3}
        backNavigateLink={backNavigateLink}
      />
    </>
  );
};
