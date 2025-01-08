import React from "react";
import Title from "../layout/Title";
import Card from "./Card";
// import { AiFillAppstore } from "react-icons/ai";
// import { SiAntdesign, SiProgress } from "react-icons/si";
// import { FaBars, FaGlobe, FaMobile } from "react-icons/fa";
import {
  FaChartLine,
  FaCode,
  FaSearch,
  FaMobileAlt,
  FaPalette,
  FaServer,
} from "react-icons/fa";

function Features() {
  return (
    <section
      id="features"
      className="w-full  py-20  border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What i do" />
      {/* <div className="w-1/2 px12  py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor t0-[#202327]
      group bg-gradient-to-b hover:from-black hover:to-[#1e2023] transition-colors duration-300
      ">

      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Strategy"
          des="Develop and implement effective strategies to grow businesses and achieve organizational goals."
          icon={FaChartLine}
        />
        <Card
          title="App Development"
          des="Design and build mobile and web applications tailored to meet user needs and enhance functionality."
          icon={FaCode}
        />
        <Card
          title="SEO Optimisation"
          des="Improve website visibility on search engines through optimization techniques and best practices."
          icon={FaSearch}
        />
        <Card
          title="Mobile Development"
          des="Create responsive and user-friendly mobile applications for various platforms."
          icon={FaMobileAlt}
        />
        <Card
          title="UX Design"
          des="Craft intuitive user experiences with a focus on usability, accessibility, and user satisfaction."
          icon={FaPalette}
        />
        <Card
          title="Hosting Website"
          des="Provide reliable and secure web hosting solutions to ensure seamless online presence., and user satisfaction."
          icon={FaServer}
        />
      </div>
    </section>
  );
}

export default Features;
