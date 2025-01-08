import React from "react";
import { logo } from "../../assets/index";
import ContactIcon from "../contact/ContactIcon";

function Footer() {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col items-center gap-8 ">
        <img src={logo} alt="logo" />
        <ContactIcon />
      </div>
      <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-designColor tracking-wide">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <a href="#" target="_blank">
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              About
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          </a>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Portifilo
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              services
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              blocg
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Contact
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full "> <h3 className="text-xl uppercase text-designColor tracking-wide">
         Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Autentication
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              system Status
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Terms service
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              price 
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              over right
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
        </ul></div>
      <div className="w-full h-full "> <h3 className="text-xl uppercase text-designColor tracking-wide">
         Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Documentation
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Authentication
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              API reference
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              support
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              open source
              <span className="h-[1px] w-full absolute inline-flex bg-designColor -bottom-1 
              left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 "></span>
            </span>
          </li>
        </ul></div>
        
    </div>
  );
}

export default Footer;
