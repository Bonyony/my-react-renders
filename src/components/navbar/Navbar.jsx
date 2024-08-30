import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <>
      <ul className="flex items-center gap-7 mt-2 sm:mt-auto">
        <Link
          to="/"
          className="group p-2 bg-inherit border-2 border-sky-500 hover:bg-sky-500 text-sky-600 transition-all duration-0 rounded-sm"
        >
          <li className="group-hover:text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Home
          </li>
        </Link>
        <Link
          to="/renders"
          className="group p-2 bg-inherit border-2 border-orange-500 hover:bg-orange-500 text-orange-600 transition-all duration-0 rounded-sm"
        >
          <li className="group-hover:text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Renders
          </li>
        </Link>
        <Link
          to="/aboutme"
          className="group p-2 bg-inherit border-2 border-emerald-500 hover:bg-emerald-500 text-emerald-600 transition-all duration-0 rounded-sm"
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
    <div className="render__navbar text-black font-extrabold w-full border-b-2 border-sky-500">
      <div className="render__links-container flex sm:flex-row flex-col  justify-between items-center p-5 mx-auto">
        <div className="render__logo text-3xl ml2 ">
          <h1 className="bungee uppercase">
            <div>
              <motion.span className="text-sky-900">R</motion.span>
              <motion.span className="text-sky-800">e</motion.span>
              <motion.span className="text-sky-700">a</motion.span>
              <motion.span className="text-sky-600">c</motion.span>
              <motion.span className="text-sky-500">t </motion.span>
              <motion.span className="text-sky-900">R</motion.span>
              <motion.span className="text-sky-800">e</motion.span>
              <motion.span className="text-sky-700">n</motion.span>
              <motion.span className="text-sky-600">d</motion.span>
              <motion.span className="text-sky-500">e</motion.span>
              <motion.span className="text-sky-400">r</motion.span>
              <motion.span className="text-sky-400">s</motion.span>
            </div>
          </h1>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
