import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const ScrolltoTop = () => {
  return (
    <button className="scrollup font-bold flex items-center justify-center text-xl text-white z-10 fixed right-[2.5rem] bottom-[3rem] bg-purple-500 hover:bg-purple-700  rounded-full h-[50px]  w-[50px] md:h-[60px]  md:w-[60px] ">
      <Link
        activeClassName="selected"
        to="nav"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <FaArrowUp className=" hover:animate-scroll-up" />
      </Link>
    </button>
  );
};

export default ScrolltoTop;
