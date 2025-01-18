import React from "react";
import { Loading } from "../components";

const AboutMe = () => {
  return (
    <section className="h-screen flex flex-col items-center  p-5">
      <img className="w-12" src="/img/lookingGlass.jpeg" alt="My Art" />

      <h2 className="text-4xl font-black italic my-2">About</h2>
      <div className="flex flex-row gap-4">
        <a
          className="text-blue-700 hover:text-blue-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          href="https://github.com/Bonyony"
          target="_blank"
        >
          GitHub
        </a>

        <a
          className="text-blue-700 hover:text-blue-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          href="https://frankfrancione.com/"
          target="_blank"
        >
          Portfolio
        </a>
      </div>
      <p className="my-2 text-justify text-wrap container max-w-[600px] px-3">
        I created this page to showcase some cool effects that can be made with
        React-Three-Fiber and the Drei Library. As I've grown as a developer, I
        have redesigned the page to be more and more minimal, as that is usually
        cleaner. It is tough to fit thins like these into other websites and
        projects because they can often come off as tacky or cause performance
        issues on the page. I'm glad to have somewhere I can come back to and
        just play around with designs that interst me without having to worry
        too much about how they fit in.
      </p>
    </section>
  );
};

export default AboutMe;
