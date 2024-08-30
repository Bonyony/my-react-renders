import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <>
      <ul className="flex items-center gap-7 mt-2 sm:mt-auto">
        <Link
          to="/"
          className="group p-2 bg-inherit border-2 border-blue-500 hover:bg-blue-500 text-blue-600 transition-all duration-0"
        >
          <li className="group-hover:text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Home
          </li>
        </Link>
        <Link
          to="/renders"
          className="group p-2 bg-inherit border-2 border-red-500 hover:bg-red-500 text-red-600 transition-all duration-0"
        >
          <li className="group-hover:text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Renders
          </li>
        </Link>
        <Link
          to="/aboutme"
          className="group p-2 bg-inherit border-2 border-green-500 hover:bg-green-500 text-green-600 transition-all duration-0"
        >
          <li className="group-hover:text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            About Me
          </li>
        </Link>
      </ul>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="render__navbar text-black font-extrabold w-full border-b-2 border-blue-500">
      <div className="render__links-container flex sm:flex-row flex-col  justify-between items-center p-5 mx-auto">
        <div className="render__logo text-3xl ml2 ">
          <h1 className="bungee uppercase">
            <div>
              <motion.span className="text-blue-500">R</motion.span>
              <motion.span className="text-red-500">e</motion.span>
              <motion.span className="text-green-500">a</motion.span>
              <motion.span className="text-blue-500">c</motion.span>
              <motion.span className="text-red-500">t </motion.span>
              <motion.span className="text-green-500">R</motion.span>
              <motion.span className="text-blue-500">e</motion.span>
              <motion.span className="text-red-500">n</motion.span>
              <motion.span className="text-green-500">d</motion.span>
              <motion.span className="text-blue-500">e</motion.span>
              <motion.span className="text-red-500">r</motion.span>
              <motion.span className="text-green-500">s</motion.span>
            </div>
          </h1>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
