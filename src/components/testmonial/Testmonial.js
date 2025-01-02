import React, { useState } from "react";
import Title from "../layout/Title";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import TestmonialOne from "./TestmonialOne";
import TestmonialTwo from "./TestmonialTwo";


function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md 
      text-gray-500 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10
      '
      
      onClick={onClick}
    ><HiArrowRight/></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
    className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md 
    text-gray-500 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10
    '
      onClick={onClick}
    ><HiArrowLeft/></div>
  );
}

function Testmonial() {
  const [dotActive,setDotActive] = useState(0)
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow : <SampleNextArrow/>,
    prevArrow : <SamplePrevArrow/>,
    beforeChange : (prev,next) =>{
      setDotActive(next)
    },
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ display : "flex",gap : "15px", justifyContent:"center" , marginTop: "20px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={ 
        i === dotActive ? {
          
            width: "12px",
            height: "12px",
            color: "blue",
            background: "#ff014f" ,
            borderRadius : "50%",
            cursor: "pointer",
  
          
        } : { width: "12px",
          height: "12px",
          color: "blue",
          background: "gray" ,
          borderRadius : "50%",
          cursor: "pointer",
}
        }
      >
        
      </div>
    ),
  };

  return (
    <section id="testimonial" className="w-full p-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENT SAY" des="Testmonial" />
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* <div className="w-full ">
            <div className="w-full h-[500px]  flex justify-between">
              <div
                className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23242b] shadow-shadowOne p-8 rounded-lg
       flex flex-col justify-center gap-2"
              >
                <img
                  className="h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  livinus Ekene
                </p>
                <h3 className="text-2xl font-bold">ugwuja livinus Ekene</h3>
                <p className="text-base tracking-wide text-gray-500">
                  operational officer
                </p>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-center">
                <img className="w-[20%]" src={quotes} alt="quotes" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne flex flex-col justify-center">
                  <div className="flex justify-between items-center py-3 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">
                        Travel mobile app design
                      </h3>
                      <p className="text-base text-gray-500 mt-3">
                        via upwork mar 2015 - Aug 2021
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <TestmonialOne/>
          <TestmonialTwo/>
          <TestmonialOne/>
         
        </Slider>
      </div>
    </section>
  );
}

export default Testmonial;
