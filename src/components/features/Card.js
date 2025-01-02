import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

function Card({ title, des, icon: Icon }) {
  return (
    <div
      className="w-full px-12 h-80  py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor t0-[#202327]
    group bg-gradient-to-b hover:from-black hover:to-[#1e2023] transition-colors duration-300 grpup
    "
    >
      <div className="h-72 overflow-y-hidden">
        <div className="flex flex-col h-full gap-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-5xl text-designColor">{Icon && <Icon />}</span>

          <h2 className="text-2xl font-titleFont font-bold text-gray-300">
            {" "}
            {title}
          </h2>
          <p> {des}</p>

          <span className="text-2xl text-designColor">
            <HiArrowCircleRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
