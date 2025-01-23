import React from 'react'
import { testimonialTwo, quotes } from "../../assets";
import { RiStarFill } from "react-icons/ri";

function TestmonialTwo() {
  return (
    <div className="w-full">
         <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
           <div
             className="w-full lgl:w-[35%]  h-full bg-gradient-to-r from-[#1e2024] to-[#23242b]
              shadow-shadowOne p-8  rounded-lg
           flex flex-col md:flex-row lgl:flex-col justify-center md:justify-start lgl:justify-center gap-2"
           >
             <img
               className=" w-full h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
               src={testimonialTwo}
               alt="testimonialTwo"
             />
             <div className='flex flex-col justify-end'>
             <p className="text-xs uppercase text-designColor tracking-wide mb-2">
               Livinus Ekene
             </p>
             <h3 className="text-2xl font-bold">Ugwuja Livinus Ekene</h3>
             <p className="text-base tracking-wide text-gray-500">
               Frontend Developer
             </p>
             </div>
           
           </div>
           <div className="w-full lgl:w-[60%] h-full flex flex-col justify-center">
             <img className="w-20 lgl:w-32" src={quotes} alt="quotes" />
             <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 
             rounded-lg shadow-shadowOne justify-center">
               <div className="flex flex-col lgl:flex-row justify-between lgl:items-center py-3 border-b-2 border-b-gray-900 gap-2 lgl:gap-0">
                 <div>
                   <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                     SkillLift Platform Development
                   </h3>
                   <p className="text-base text-gray-500 mt-3">
                     Collaborative Project - 2024
                   </p>
                 </div>
                 <div className="text-yellow-300 flex gap-1">
                   <RiStarFill />
                   <RiStarFill />
                   <RiStarFill />
                   <RiStarFill />
                   <RiStarFill />
                 </div>
               </div>
               <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                 Livinus Ekene showcased exceptional skills in building the SkillLift
                 platform, designed to equip Nigerian secondary school students with modern
                 skills. His expertise in React, Tailwind CSS, and front-end development contributed
                 significantly to the project’s success, delivering both online and offline accessibility.
               </p>
             </div>
           </div>
         </div>
       </div>
  )
}

export default TestmonialTwo