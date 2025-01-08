import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { logo } from "../../assets/index";
import { navLinkData } from "../constance";
import ContactIcon from "../contact/ContactIcon";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden md:inline-flex item-center gap-6 lgl:gap-10">
          {navLinkData.map((navLink) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={navLink._id}
            >
              <Link
                activeClass="active"
                to={navLink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center 
        rounded-full text-designColor cursor-pointer "
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-hidden absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, nemo temporibus. Explicabo earum, labore magnam laborum
                  nam vero tenetur aspernatur vitae neque autem temporibus?
                  Debitis error ipsum aut culpa amet.
                </p>
              </div>
              <ul className="flex flex-col gap-4 py-2 relative">
                {navLinkData.map((navLink) => (
                  <li key={navLink._id}  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                    <Link
                    onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={navLink.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <p className="text-base uppercase font-titleFont mb-4">
                  Find me
                </p>
                <ContactIcon />
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 duration-300
            text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
