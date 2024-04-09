import React from "react";
import JavascriptLogo from "../assets/javascript.svg";
import NodejsLogo from "../assets/nodejs.svg";
import HtmlLogo from "../assets/html.svg";
import CssLogo from "../assets/css.svg";
import ReactjsLogo from "../assets/reactjs.svg";

const Experience = () => {
  return (
    <div id="skills" className=" w-full bg-black">
      <div className=" container p-10">
        <h1 className=" text-white text-4xl lg:text-5xl xl:text-7xl font-bold leading-none text-center mb-10">
          Experienced With
        </h1>
        <div
          id="experience-logo-box "
          className=" flex flex-wrap gap-10 justify-center"
        >
          <img
            src={JavascriptLogo}
            className=" w-[50px] h-[50px] lg:w-[50px] lg:h-[50px]"
            alt="Javascript Logo"
          />
          <img
            src={NodejsLogo}
            className=" w-[50px] h-[50px] lg:w-[50px] lg:h-[50px]"
            alt="NodeJS Logo"
          />
          <img
            src={HtmlLogo}
            className=" w-[50px] h-[50px] lg:w-[50px] lg:h-[50px]"
            alt="HTML Logo"
          />
          <img
            src={CssLogo}
            className=" w-[50px] h-[50px] lg:w-[50px] lg:h-[50px]"
            alt="CSS Logo"
          />
          <img
            src={ReactjsLogo}
            className=" w-[50px] h-[50px] lg:w-[50px] lg:h-[50px]"
            alt="ReactJS Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
