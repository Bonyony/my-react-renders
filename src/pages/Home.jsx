import React from "react";
import { DemoPage, TextDemo } from "../components";

const Home = () => {
  return (
    <>
      <div className="p-6">
        <h1 className="text-shadow-pop-tr flex justify-center text-gray-700 font-bold  text-6xl">
          Welcome to my 3D demo page!
        </h1>
        <div className="flex justify-center ">
          <p className="my-4 mx-36 px-4 py-2 text-xl shadow-md rounded-lg text-gray-200 bg-gray-800">
            These are renders using React, React Three Fiber, and the Drei
            library. There may be other libraries used and those will be noted
            in the demo. Most demos are interactive in some way by using the
            mouse (Left and Right Click).
          </p>
        </div>
      </div>
      <DemoPage />
      <TextDemo />
    </>
  );
};

export default Home;
