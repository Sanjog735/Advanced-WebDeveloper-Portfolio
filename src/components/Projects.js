import React from "react";
import proj1 from "../assets/project1.png";
import proj2 from "../assets/project2.png";
import proj3 from "../assets/project3.png";
import proj4 from "../assets/project4.png";
import proj5 from "../assets/project5.png";
import proj6 from "../assets/project6.png";

import { AiFillGithub, AiFillChrome } from "react-icons/ai";

const Projects = () => {
  return (
    <div
      id="projects"
      className="px-6 pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 container mx-auto"
    >
      {/* For Mobile  */}
      <div className=" mb-6">
        <div className="text-black my-auto ">
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold leading-none text-center mb-10 ">
            My Work
          </h1>
          <p className=" max-w-[500px] leading-snug text-center mx-auto  mb-8 text-[18px] xl:text-xl  text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have attitude specefic.
          </p>
        </div>
      </div>

      {/* For Laptop */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-purple-700 overflow-hidden shadow-xl z-[1]">
          <a href="/" className="group col-span-3">
            <img
              className="h-[200px] w-full object-cover object-top duration-200 ease-in-out group-hover:scale-110 rounded-lg:"
              src={proj1}
              alt="Project1"
            />
          </a>

          <div className="p-4">
            <h2 className="text-gray-200">Project-1</h2>
            <p className="text-gray-400">
              Lorem ipsum dollar sit adjust cover.
            </p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-end text-white mb-3 mr-3">
            <a className=" cursor-pointer" href="#">
              <AiFillGithub className="w-[35px] h-auto" />
            </a>
            <a className=" cursor-pointer" href="#">
              <AiFillChrome className="w-[35px] h-auto" />
            </a>
          </div>
        </div>

        <div className="rounded-xl bg-purple-700 overflow-hidden shadow-xl z-[1]">
          <a href="/" className="group col-span-3">
            <img
              className="h-[200px] w-full object-cover object-top duration-200 ease-in-out group-hover:scale-110 rounded-lg:"
              src={proj2}
              alt="Project2"
            />
          </a>

          <div className="p-4">
            <h2 className="text-gray-200">Project-2</h2>
            <p className="text-gray-400">
              Lorem ipsum dollar sit adjust cover.
            </p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-end text-white mb-3 mr-3">
            <a className=" cursor-pointer" href="#">
              <AiFillGithub className="w-[35px] h-auto" />
            </a>
            <a className=" cursor-pointer" href="#">
              <AiFillChrome className="w-[35px] h-auto" />
            </a>
          </div>
        </div>

        <div className="rounded-xl bg-purple-700 overflow-hidden shadow-xl z-[1]">
          <a href="/" className="group col-span-3">
            <img
              className="h-[200px] w-full object-cover object-top duration-200 ease-in-out group-hover:scale-110 rounded-lg:"
              src={proj3}
              alt="Project3"
            />
          </a>

          <div className="p-4">
            <h2 className="text-gray-200">Project-3</h2>
            <p className="text-gray-400">
              Lorem ipsum dollar sit adjust cover.
            </p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-end text-white mb-3 mr-3">
            <a className=" cursor-pointer" href="#">
              <AiFillGithub className="w-[35px] h-auto" />
            </a>
            <a className=" cursor-pointer" href="#">
              <AiFillChrome className="w-[35px] h-auto" />
            </a>
          </div>
        </div>

        <div className="rounded-xl bg-purple-700 overflow-hidden shadow-xl z-[1]">
          <a href="/" className="group col-span-3">
            <img
              className="h-[200px] w-full object-cover object-top duration-200 ease-in-out group-hover:scale-110 rounded-lg:"
              src={proj4}
              alt="Project4"
            />
          </a>
          <div className="p-4">
            <h2 className="text-gray-200">Project-4</h2>
            <p className="text-gray-400">
              Lorem ipsum dollar sit adjust cover.
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-end text-end text-white mb-3 mr-3">
            <a className=" cursor-pointer" href="#">
              <AiFillGithub className="w-[35px] h-auto" />
            </a>
            <a className=" cursor-pointer" href="#">
              <AiFillChrome className="w-[35px] h-auto" />
            </a>
          </div>
        </div>

        <div className="rounded-xl bg-purple-700 overflow-hidden shadow-xl z-[1]">
          <a href="/" className="group col-span-3">
            <img
              className="h-[200px] w-full object-cover object-top duration-200 ease-in-out group-hover:scale-110 rounded-lg:"
              src={proj5}
              alt="Project5"
            />
          </a>

          <div className="p-4">
            <h2 className="text-gray-200">Project-5</h2>
            <p className="text-gray-400">
              Lorem ipsum dollar sit adjust cover.
            </p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-end text-white mb-3 mr-3">
            <a className=" cursor-pointer" href="#">
              <AiFillGithub className="w-[35px] h-auto" />
            </a>
            <a className=" cursor-pointer" href="#">
              <AiFillChrome className="w-[35px] h-auto" />
            </a>
          </div>
        </div>

        <div className="rounded-xl bg-purple-700 overflow-hidden shadow-xl z-[1]">
          <a href="/" className="group col-span-3">
            <img
              className="h-[200px] w-full object-cover object-top duration-200 ease-in-out group-hover:scale-110 rounded-lg:"
              src={proj6}
              alt="Project6"
            />
          </a>

          <div className="p-4">
            <h2 className="text-gray-200">Project-6</h2>
            <p className="text-gray-400">
              Lorem ipsum dollar sit adjust cover.
            </p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-end text-white mb-3 mr-3">
            <a className=" cursor-pointer" href="#">
              <AiFillGithub className="w-[35px] h-auto" />
            </a>
            <a className=" cursor-pointer" href="#">
              <AiFillChrome className="w-[35px] h-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
