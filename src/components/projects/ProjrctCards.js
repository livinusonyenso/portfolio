import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

function ProjectCards({ title, des, src }) {
  return (
    <div className="w-full h-auto px-6 py-8 rounded-lg shadow-shadowOne flex flex-col 
      bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b 
      hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={src}
          alt=""
        />
      </div>

      <div className="w-full mt-5 gap-4">
        <div className="flex items-center justify-between">
          {/* Title section */}
          <h3 className="text-base uppercase text-designColor font-normal whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </h3>

          {/* Icons section */}
          <div className="flex gap-2">
            <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-500 hover:text-designColor duration-500 cursor-pointer">
              <BsGithub />
            </span>
            <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-500 hover:text-designColor duration-500 cursor-pointer">
              <FaGlobe />
            </span>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-100">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
