import React from "react";
import heroImg from "../assets/about.jpg";
import { FaArrowDown } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-[100vh] flex items-center justify-center"
    >
      <div className=" grid md:grid-cols-2  container px-8 ">
        <div
          id="hero-text-container"
          className=" flex flex-col gap-4 order-last md:order-first pt-8 "
        >
          <p className=" text-purple-700 font-normal text-[14px] sm:text-base lg:text-xl md:pl-4 leading-none">
            Hi , my name is
          </p>
          <h1 className=" text-black text-4xl lg:text-5xl xl:text-7xl font-bold leading-none">
            Brittany Chiang.
          </h1>
          <h1 className=" text-gray-500 text-3xl lg:text-4xl xl:text-4xl font-bold leading-none">
            I build things for the web
          </h1>
          <p className="text-[18px] lg:text-xl  text-gray-500">
            I’m a software engineer specializing in building and occasionally
            designing exceptional digital experiences. Currently, I’m focused on
            building accessible, human-centered products at Infosys.
          </p>
          <div className=" flex gap-4 lg:gap-8 mt-4">
            <a
              href="mailto:sanyogp99@gmail.com"
              target="_blank"
              className="flex gap-1 items-center justify-center  text-purple-700  border-2 border-purple-600 rounded-md px-3 md:px-4  py-1 md:py-3 hover:bg-purple-100 ease-in-out duration-300"
            >
              <span>Say Hello</span>
              <svg
                class="button__icon "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#A020F0"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#A020F0"
                ></path>
              </svg>
            </a>
            <a
              href={Resume}
              download={Resume}
              className=" flex gap-1  text-purple-700 border-2 border-purple-600 rounded-md px-3 md:px-4  py-2 md:py-3 hover:bg-purple-100 ease-in-out duration-300"
            >
              Download CV
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="#A020F0"
                ></path>
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="#A020F0"
                ></path>
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="#A020F0"
                ></path>
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="#A020F0"
                ></path>
              </svg>
            </a>
          </div>
          {/* Scroll Wheel  */}{" "}
          <Link
            activeClassName="selected"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <div className=" flex items-center mt-10 sm:mt-20 text-purple-700 cursor-pointer">
              <svg
                width="32px"
                height="32px"
                class="home__scroll-mouse"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": 1.5,
                }}
              >
                <path
                  className="wheel animate-wheel"
                  d="M123.359,79.775l0,72.843"
                  style={{
                    fill: "none",
                    stroke: "#A020F0",
                    "stroke-width": "20px",
                  }}
                ></path>
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  style={{
                    fill: "none",
                    stroke: "#A020F0",
                    "stroke-width": "20px",
                  }}
                ></path>
              </svg>
              <span>Scroll Down</span>
              <FaArrowDown size={15} className="ml-1 " />{" "}
            </div>
          </Link>
        </div>

        <div
          id="hero-img-container"
          className=" justify-self-center order-first mt-20 lg:mt-0"
        >
          <img
            className="w-[270px] h-[270px] sm:w-[350px] sm:h-[350px] lg:w-[450px]  lg:h-[450px]  object-cover bg-center shadow-inner animate-profile-anim "
            src={heroImg}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
