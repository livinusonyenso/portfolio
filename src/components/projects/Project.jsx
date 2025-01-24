import React from "react";
import Title from "../layout/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
// , projectFour, projectFive, projectSix
import ProjrctCards from "./ProjrctCards";

function Project() {
  return (
    <section
      id="project"
      className="w-full lgl:p-2 border-b-[1px] border-b-black"
    >
      {/* Section Title */}
      <div className="flex justify-center items-center text-center">
        <Title title="Visit my website and get feedback" des="My Projects" />
      </div>

      {/* Project Cards */}
      <div className="w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 flex flex-col justify-center items-center">
        <ProjrctCards
          title="SOCIAL MEDIA CLONE"
          des="A clone of popular social media platforms with modern features."
          src={projectOne}
        />
        <ProjrctCards
          title="E-COMMERCE"
          des="An e-commerce solution with cart, checkout, and admin functionalities."
          src={projectTwo}
        />

        <ProjrctCards
          title="REAL ESTATE APP"
          des="A comprehensive platform to browse, buy, sell, or rent properties."
         
        />
        <ProjrctCards
          title="FURNITURE APP"
          des="An app to explore and purchase furniture for your home and office."
          
        />
        <ProjrctCards
          title=" CHATTING APP"
          des="An application for creating and visualizing interactive data charts and graphs."
          src={projectThree}
        />
        <ProjrctCards
          title="BLOG APPLICATION"
          des="A platform for users to share articles, comment, and like posts."
          // src={projectFour}
        />
        <ProjrctCards
          title="WEATHER APP"
          des="A weather forecasting app providing real-time data for any location."
          // src={projectFive}
        />
        <ProjrctCards
          title="TASK MANAGEMENT TOOL"
          des="A productivity app to manage and track daily tasks efficiently."
          // src={projectSix}
        />
      </div>
    </section>
  );
}

export default Project;
