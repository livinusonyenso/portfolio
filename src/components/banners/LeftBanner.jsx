import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaTwitter, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

function LeftBanner() {
  const [text] = useTypewriter({
    words: [
      "Professional Coder",
      "Frontend Developer",
      "UI Designer",
      "React Specialist",
      "SEO Expert",
      "Mobile App Developer",
      "Tech Enthusiast"
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5 ">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-3xl font-bold text-white">
          HI,I'M {""}
          <span className="text-designColor capitalize">LIVINUS EKENE</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Livinus is a passionate Frontend Developer with a strong foundation in
          HTML, CSS, JavaScript, and React. With experience in building
          responsive and user-friendly web applications, Livinus focuses on
          creating seamless user experiences that cater to diverse audiences.
        </p>
      </div>

      <div className="flex justify-between">
        <div>
          {" "}
          <h2 className="text-base uppercase font-titleFont mb-4">Find me</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebook />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div>
          {" "}
          <h2 className="text-base uppercase font-titleFont mb-4">my skill</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
