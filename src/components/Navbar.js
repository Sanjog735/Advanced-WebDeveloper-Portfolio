import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div
      id="nav"
      className=" container h-[80px]  flex  justify-between  items-center  text-xl mx-auto px-8"
    >
      <h1 className=" cursor-pointer font-bold hover:text-purple-700 ease-in-out duration-300">
        Brittany.
      </h1>

      {/* MENU */}
      <div>
        <ul className=" hidden md:flex">
          <li className=" px-4 cursor-pointer hover:text-purple-700 hover:animate-scroll-up ">
            <Link
              activeClassName="selected"
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className=" px-4 cursor-pointer hover:text-purple-700 hover:animate-scroll-up">
            <Link
              activeClassName="selected"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className=" px-4 cursor-pointer hover:text-purple-700 hover:animate-scroll-up">
            <Link
              activeClassName="selected"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>

          <li className=" px-4 cursor-pointer hover:text-purple-700 hover:animate-scroll-up">
            <Link
              activeClassName="selected"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>

          <li className=" px-4 cursor-pointer hover:text-purple-700 hover:animate-scroll-up">
            <Link
              activeClassName="selected"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div
        onClick={handleNav}
        className=" md:hidden cursor-pointer bg-purple-700 rounded-full h-[50px] w-[50px] flex items-center justify-center text-white z-30 fixed right-[5%]"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile  Nav*/}
      <ul
        className={
          nav
            ? "md:hidden text-white bg-purple-700 fixed z-20  top-0 left-0 w-full h-screen flex justify-center items-center flex-col gap-8 text-3xl "
            : "hidden fixed"
        }
      >
        <li className=" px-4 cursor-pointer">
          <Link
            onClick={handleNav}
            activeClassName="selected"
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className=" px-4 cursor-pointer">
          <Link
            onClick={handleNav}
            activeClassName="selected"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className=" px-4 cursor-pointer">
          <Link
            onClick={handleNav}
            activeClassName="selected"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className=" px-4 cursor-pointer">
          <Link
            onClick={handleNav}
            activeClassName="selected"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className=" px-4 cursor-pointer">
          <Link
            onClick={handleNav}
            activeClassName="selected"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
