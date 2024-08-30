import React from "react";
import { DemoPage, TextDemo } from "../components";

const Home = () => {
  return (
    <>
      <div className="p-6">
        <h1 className="bungee text-shadow-pop-tr flex justify-center text-black text-xl sm:text-4xl lg:text-6xl">
          Welcome to my 3D demo page!
        </h1>
        <div className="flex justify-center ">
          <p className="my-4 mx-2 sm:mx-20 lg:mx-36 px-4 py-2 text-sm sm:text-lg lg:text-xl  border-2 border-slate-800 text-gray-200 bg-gray-800">
            These are renders using React, React Three Fiber, and the Drei
            library. There may be other libraries used and those will be noted
            in the demo. Most demos are interactive in some way by using the
            mouse (Left and Right Click). I am continually updating this site
            with new renders to show my skills!
          </p>
        </div>
      </div>
      <DemoPage />
    </>
  );
};

export default Home;
