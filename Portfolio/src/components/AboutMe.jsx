import React from "react";

const AboutMe = () => {
  return (
    <>
      <div>
        <div className="flex md:w-1/2 ">
          <div>
            <h1 className="text-blue-800 text-center sm:text-center md:text-left  text-2xl pt-20 p-7 md:pt-24 sm:pt-10 md:text-4xl font-extrabold tracking-wide ">
              About me
            </h1>
            <p className="p-7">
              I’m an undergraduate Software Engineering student and passionate
              MERN stack developer. I love building modern, responsive web
              applications using MongoDB, SQL, Express.js, React, and Node.js.
              Currently pursuing my degree while delivering clean, efficient
              code and continuously learning new technologies to solve
              real-world problems. I already do some full stack projects to
              enhance my skills, Looking for an opportunity to implement my
              knowlegde and skills on industry
            </p>

            <button
              
              className="
      bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900
      hover:from-cyan-400 hover:to-cyan-800 ml-7
      shadow-lg shadow-cyan-800/50
      rounded-full
      border
      border-gray-700
      px-6 py-2
      text-lg font-semibold
      text-white
      animate-pulse
      cursor-pointer
      transition-all duration-300 ease-in-out
    "
            >
              Latest Projects
            </button>
          </div>
          <div className="flex w-full items-center object-contain">
            <img 
            className="w-[1200px]"
             src="https://media.istockphoto.com/id/2170578930/photo/about-me.jpg?s=612x612&w=0&k=20&c=rLsmKZUGN35N0u6me1QDbVi6q6ewvncCRhEprrXJe98=" alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AboutMe;
