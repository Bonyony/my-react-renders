import React from "react";

const AboutMe = () => {
  return (
    <div className="m-4 p-4 flex flex-row">
      <div className="flex flex-col">
        <h1 className="flex font-bold text-left text-7xl">
          About Me, <br />
          Frank Francione
        </h1>

        <p className="flex flex-row my-4 font-bold text-3xl">
          Check out my&nbsp;
          <a
            className="text-blue-700 hover:text-blue-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            href="https://github.com/Bonyony"
            target="_blank"
          >
            GitHub
          </a>
        </p>
        <p className="flex my-4 text-xl ">
          I am a Front-End / React Developer with a specialization in 3D and
          Graphics. <br />
          These are projects which reflect things I am passionate about,
          interested in, or maybe I just think it's cool. <br />
          Though most of these renderings are simple showcases of specific
          skills, I intend for them to fit into my larger design perspective.{" "}
          <br />
          In my opinion, 3D graphics are best used sparingly in a website and
          are best suited as something that draws the user's attention.
        </p>
      </div>
      <img
        className="w-96 h-96 m-4"
        src="public/img/lookingGlass.jpeg"
        alt="My Art"
      />
    </div>
  );
};

export default AboutMe;
