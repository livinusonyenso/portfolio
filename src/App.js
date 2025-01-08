import React from "react";
import "./App.css";
import Banners from "./components/banners/Banners";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";
import Testmonial from "./components/testmonial/Testmonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banners />
        <Features />
        <Project/>
        <Resume/>
        <Testmonial/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
