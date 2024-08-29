import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="flex items-center gap-7">
        <Link to="/" className="group p-2 bg-inherit border-2 border-black">
          <li className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Home
          </li>
        </Link>
        <Link
          to="/renders"
          className="group p-2 bg-inherit border-2 border-black"
        >
          <li className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Renders
          </li>
        </Link>
        <Link
          to="/aboutme"
          className="group p-2 bg-inherit border-2 border-black"
        >
          <li className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            About Me
          </li>
        </Link>
      </ul>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="render__navbar text-black font-extrabold w-full border-b-2 border-black">
      <div className="render__links-container flex sm:flex-row flex-col justify-between items-center p-5 mx-auto">
        <div className="render__logo text-3xl ml2 ">
          <h1 className="monoton">React Renders</h1>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
