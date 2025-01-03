import React from "react";
import LeftBanner from "./LeftBanner";
import { bannerImg2 } from "../../assets";

function Banners() {
  return (
    <section
      id="home"
      className="w-full flex items-center border-b-[1px] font-titleFont border-b-black"
      style={{ height: "90vh", margin: "0" }}
    >
      <LeftBanner />

      <div className="w-1/2 flex justify-center items-center relative">
        <img
          className="w-[700px] h-[960px] object-contain  -scale-x-100"
          style={{ transform: "scale(1.2) scaleX(-1)" }}
          src={bannerImg2}
          alt="bannerImg"
        />
        <div className="absolute buttom-o w-[500] h-[500]
         bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">

         </div>
      </div>
    </section>
  );
}

export default Banners;
