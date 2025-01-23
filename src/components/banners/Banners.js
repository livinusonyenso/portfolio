import React from "react";
import LeftBanner from "./LeftBanner";
import { bannerImg2 } from "../../assets";

function Banners() {
  return (
    <section
      id="home"
      className="w-full flex flex-col gap-10 md:gap-5 lg:gap-0 lg:flex-row items-center border-b border-b-black font-titleFont"
      style={{ height: "90vh", margin: "0" }}
    >
      <LeftBanner />

      <div className="w-full lgl:w-1/2 flex justify-center items-center relative  md:hidden lgl:block sm:hidden ">
        <img
          className="sm:pb-20 lgl:w-[80%]  object-contain  -scale-x-100 z-10"
          style={{ transform: "scale(1.2) scaleX(-1)" }}
          src={bannerImg2}
          alt="bannerImg"
        />
        {/* <div className="absolute buttom-0 w-[350px] h-[300px] lgl:w-[100%] lgl:h-[500px]
         bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">

         </div> */}
      </div>

    </section>
  );
}

export default Banners;
