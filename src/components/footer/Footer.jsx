import React from "react";

const Footer = () => {
  return (
    <div className="render__footer text-black  p-6 h-full w-screen align-middle flex flex-col justify-center bg-inherit border-2 border-t-black ">
      <h3 className="text-lg sm:text-2xl font-bold flex justify-center">
        Look at these wicked shapes!!!
      </h3>
      <div className="flex justify-center text-sm">
        <p>
          Made with love by{" "}
          <a
            href="https://frankfrancione.com/"
            target="_blank"
            className="hover:text-blue-600"
          >
            Frank Francione
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
