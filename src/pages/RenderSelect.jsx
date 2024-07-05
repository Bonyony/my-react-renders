import React from "react";
import { Link } from "react-router-dom";

const RenderSelect = () => {
  return (
    <>
      <div className="m-4 p-4">
        <h1 className="text-6xl font-bold text-center">
          Select a Render to View
        </h1>

        <div className="grid grid-cols-3 gap-8 my-8 mx-16">
          <Link
            to="/renders/logo"
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-blue-900 hover:text-white transition-all duration-200"
          >
            React Logo
            <p className="text-sm">
              My idea for a 3D version of the React Logo
            </p>
            <p className="text-sm font-normal">(Scroll disabled)</p>
          </Link>

          <Link
            to="/renders/3dtext"
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-yellow-500 hover:text-white transition-all duration-200"
          >
            3D Text
            <p className="text-sm">My name floating in a HDR image</p>
            <p className="text-sm font-normal">(Right-Click disabled)</p>
          </Link>

          <Link
            to="/renders/comingsoon"
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-red-700 hover:text-white transition-all duration-200"
          >
            Coming Soon
            <p className="text-sm">For when there is more to be done</p>
            <p className="text-sm font-normal">(All mouse controls enabled)</p>
          </Link>

          <Link
            to="/renders/sound"
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-rose-400 hover:text-white transition-all duration-200"
          >
            Sound Demo
            <p className="text-sm">Under construction...</p>
          </Link>

          <Link
            to=""
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-black hover:text-white transition-all duration-200"
          >
            Nothing Yet...
          </Link>

          <Link
            to=""
            className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-black hover:text-white transition-all duration-200"
          >
            Nothing Yet...
          </Link>
        </div>
        <p className="py-4  text-center">
          <strong>Default mouse controls are:</strong>
          <br /> Left-Click: Move View <br /> Right-Click: Move Object <br />
          Scroll-Wheel: Zoom (In / Out)
        </p>
      </div>
    </>
  );
};

export default RenderSelect;
