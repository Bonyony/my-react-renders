import React from "react";
import { Link } from "react-router-dom";
import { BackgroundOne } from "../components";
import { motion } from "framer-motion";

const RenderSelect = () => {
  return (
    <>
      <div className="my-4 p-4 lg:absolute z-10 w-full">
        <motion.h1
          initial={{ x: "-200%" }}
          animate={{ x: "0%" }}
          transition={{ type: "spring", stiffness: 70 }}
          drag
          dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
          dragElastic={0.4}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 9 }}
          className="bungee text-6xl text-sky-800 font-bold text-center"
        >
          Select a Render to View
        </motion.h1>
        <p className="text-center text-sky-600 mt-4 lg:mt-0 lg:hidden">
          (This page looks coolest on larger screens)
        </p>

        {/* Possibly add bg-white to the link buttons? Can obscure the animation, which depends on what it ends up as */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 mx-16">
          <Link
            to="/renders/logo"
            className="text-center  border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-blue-900 hover:text-white transition-all duration-200 rounded-sm"
          >
            React Logo
            <p className="text-sm ">
              My idea for a 3D version of the React Logo
            </p>
            <p className="text-sm font-normal ">(Scroll disabled)</p>
          </Link>

          <Link
            to="/renders/3dtext"
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-green-600 hover:text-white transition-all duration-200 rounded-sm"
          >
            3D Text
            <p className="text-sm">My name floating in an HDR image</p>
            <p className="text-sm font-normal">(Right-Click disabled)</p>
          </Link>

          <Link
            to="/renders/sound"
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-rose-400 hover:text-white transition-all duration-200 rounded-sm"
          >
            Boombox (ft. My Music)
            <p className="text-sm">Positional audio and 3D buttons</p>
            <p className="text-sm font-normal">(All mouse controls enabled)</p>
          </Link>

          <Link
            to="/renders/gallery"
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-orange-600 hover:text-white transition-all duration-200 rounded-sm"
          >
            Temporal Art Gallery
            <p className="text-sm">Experimental State [STAY BACK]</p>
            <p className="text-sm font-normal">(All mouse controls enabled)</p>
          </Link>

          <Link
            to="/renders/backgroundone"
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-purple-500 hover:text-white transition-all duration-200 rounded-sm"
          >
            Background One
            <p className="text-sm">The background of this page!</p>
            <p className="text-sm font-normal">
              (All mouse controls disabled!)
            </p>
          </Link>

          <Link
            to="/renders/comingsoon"
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-red-700 hover:text-white transition-all duration-200 rounded-sm"
          >
            Coming Soon
            <p className="text-sm">For when there is more to be done</p>
            <p className="text-sm font-normal">(All mouse controls enabled)</p>
          </Link>
        </div>
        <p className="py-4  text-center">
          <strong>Default mouse controls are:</strong>
          <br /> Left-Click: Move View <br /> Right-Click: Move Object <br />
          Scroll-Wheel: Zoom (In / Out)
        </p>
      </div>
      <BackgroundOne />
    </>
  );
};

export default RenderSelect;
