import React from "react";

const Menu = () => {
  return (
    <>
      <ul className="flex items-center gap-4">
        <li>
          <a
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            href=""
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            href=""
          >
            Renders
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            href=""
          >
            About Me
          </a>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="render__navbar text-black font-bold rounded-b-3xl  w-full shadow-md">
      <div className="render__links-container flex justify-between items-center p-5 mx-auto">
        <div className="render__logo text-2xl ml-3 ">
          <h1>Frankie's React Renders!</h1>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
