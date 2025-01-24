import React from "react";
import { logo } from "../../assets/index";
import ContactIcon from "../contact/ContactIcon";

function Footer() {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 text-center md:text-left">
      {/* Logo and Contact Section */}
      <div className="w-full h-full flex flex-col items-center gap-8">
        <img src={logo} alt="logo" />
        <ContactIcon />
      </div>

      {/* Quick Links Section */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <a href="#" target="_blank">
            <li className="hover:text-designColor duration-300 cursor-pointer">About</li>
          </a>
          <li className="hover:text-designColor duration-300 cursor-pointer">Portfolio</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">Services</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">Blog</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Resources Section */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li className="hover:text-designColor duration-300 cursor-pointer">Authentication</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">System Status</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">Terms of Service</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">Pricing</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">Copyright</li>
        </ul>
      </div>

      {/* Developers Section */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">
          Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li className="hover:text-designColor duration-300 cursor-pointer">Documentation</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">Authentication</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">API Reference</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">Support</li>
          <li className="hover:text-designColor duration-300 cursor-pointer">Open Source</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
