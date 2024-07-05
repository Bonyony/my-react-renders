import React from "react";
import { Link } from "react-router-dom";

const Selection = () => {
  return (
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
          <p className="text-sm">My idea for a 3D version of the React Logo</p>
        </Link>

        <Link
          to="/renders/3dtext"
          className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-blue-900 hover:text-white transition-all duration-200"
        >
          3D Text
          <p className="text-sm">My name floating in a HDR image</p>
        </Link>

        <Link
          to="/renders/comingsoon"
          className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-blue-900 hover:text-white transition-all duration-200"
        >
          Coming Soon
          <p className="text-sm">For when there is more to be done</p>
        </Link>

        <Link
          to=""
          className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-blue-900 hover:text-white transition-all duration-200"
        >
          Nothing Yet...
        </Link>

        <Link
          to=""
          className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-blue-900 hover:text-white transition-all duration-200"
        >
          Nothing Yet...
        </Link>

        <Link
          to=""
          className="text-center border-slate-800 border-2 py-5 gap-3 text-3xl font-bold hover:bg-blue-900 hover:text-white transition-all duration-200"
        >
          Nothing Yet...
        </Link>
      </div>
    </div>
  );
};

export default Selection;
