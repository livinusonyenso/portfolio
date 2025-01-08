import React from "react";
import LeftBanner from "./LeftBanner";
import { bannerImg2 } from "../../assets";

function Banners() {
  return (
    <section
      id="home"
      className="w-full flex  flex-col gap-10 lgl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      style={{ height: "90vh", margin: "0" }}
    >
      <LeftBanner />

      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        {/* <img
          className="w-3700px] h-[400px] lgl:w-[700px] lgl:h-[960px] object-contain  -scale-x-100 z-10"
          style={{ transform: "scale(1.2) scaleX(-1)" }}
          src={bannerImg2}
          alt="bannerImg"
        /> */}
        <div className="absolute buttom-o w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px]
         bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">

         </div>
      </div>
    </section>
  );
}

export default Banners;
