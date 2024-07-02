import React from "react";

const AboutMe = () => {
  return (
    <div className="m-4 p-4 flex flex-col">
      <h1 className="flex justify-center font-bold text-center text-6xl">
        About Me, <br />
        Frank Francione
      </h1>

      <p className="flex flex-row justify-center text-xl">
        Check out my&nbsp;
        <a
          className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          href="https://github.com/Bonyony"
          target="_blank"
        >
          GitHub
        </a>
      </p>
      <p className="flex justify-center text-xl text-center">
        I am a Front-end / React Developer with a specialization in 3D
        rendering. <br />
        These are projects which reflect things I am passionate about,
        interested in, or maybe I just think it's cool.
      </p>
      <img
        className="w-auto h-auto"
        src="public/img/lookingGlass.jpeg"
        alt="My Art"
      />
    </div>
  );
};

export default AboutMe;
