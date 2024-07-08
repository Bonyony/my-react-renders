import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="flex  items-center gap-4">
        <li>
          <Link
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            to="/renders"
          >
            Renders
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            to="/aboutme"
          >
            About Me
          </Link>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="render__navbar text-black font-bold rounded-b-3xl  w-full shadow-md">
      <div className="render__links-container flex sm:flex-row flex-col justify-between items-center p-5 mx-auto">
        <div className="render__logo text-2xl ml-3 ">
          <h1>Frankie's React Renders</h1>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
