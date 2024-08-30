import React from "react";
import { Loading } from "../components";

const AboutMe = () => {
  return (
    <>
      <div className="m-4 p-4 flex flex-col md:flex-row">
        <div className="flex flex-col justify-center ">
          <h1 className="flex font-bold text-left text-5xl md:text-7xl">
            About Me
          </h1>

          <p className="flex flex-row mt-4 font-bold text-xl md:text-3xl">
            My&nbsp;
            <a
              className="text-blue-700 hover:text-blue-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              href="https://github.com/Bonyony"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <p className="flex flex-row mt-2 mb-4 font-bold text-xl md:text-3xl">
            My&nbsp;
            <a
              className="text-blue-700 hover:text-blue-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              href="https://frankfrancione.com/"
              target="_blank"
            >
              Website
            </a>
          </p>
          <p className="flex my-4 text-sm md:text-base ">
            I am a Front-End / React Developer with a specialization in 3D and
            Graphics. <br />
            These are projects which reflect things I am passionate about,
            interested in, or maybe I just think it's cool. <br />
            Though most of these renderings are showcases of specific skills,
            they fit into my larger design perspective. <br />
            In my opinion, 3D graphics are best used sparingly in a website and
            are best suited as something that draws the user's attention. This
            site doesn't really do that...
          </p>
        </div>
        <img
          className="w-auto max-w-96 h-auto max-h-96 m-4 rounded-2xl flex align-middle justify-center"
          src="/img/lookingGlass.jpeg"
          alt="My Art"
        />
      </div>
      {/* This loading component is here for testing purposes */}
      {/* <Loading /> */}
    </>
  );
};

export default AboutMe;
