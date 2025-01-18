import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SmallMenu = () => {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  w-auto p-2 shadow"
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/renders">Renders</Link>
      </li>
      <li>
        <Link to="/aboutme">About</Link>
      </li>
    </ul>
  );
};

const Menu = () => {
  return (
    <ul tabIndex={0} className="flex flex-row gap-5 z-[1] w-auto p-2">
      <li>
        <Link className="btn btn-ghost" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost" to="/renders">
          Renders
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost" to="/aboutme">
          About
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className="navbar px-4">
      <div className="flex-1">
        <h1 className=" text-xl font-black">Rendering Showcase</h1>
      </div>
      <div className="flex-none">
        <nav className="dropdown dropdown-hover dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <SmallMenu />
        </nav>
        <nav className="hidden md:block">
          <Menu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

<div className="render__navbar text-black font-extrabold w-full border-b-2 border-sky-500">
  <div className="render__links-container flex sm:flex-row flex-col  justify-between items-center p-5 mx-auto">
    <div className="render__logo text-3xl ml2 ">
      <h1 className="bungee uppercase"></h1>
    </div>
    <Menu />
  </div>
</div>;
