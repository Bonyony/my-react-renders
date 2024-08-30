import React from "react";

const Footer = () => {
  return (
    <div className="text-black  p-6 h-full w-full align-middle flex flex-col justify-center bg-inherit border-2 border-t-sky-500 ">
      <h3 className="bungee text-sky-800 text-lg sm:text-2xl font-bold flex justify-center">
        Look at these wicked shapes!!!
      </h3>
      <div className="flex justify-center text-sm">
        <p>
          Made with love by{" "}
          <a
            href="https://frankfrancione.com/"
            target="_blank"
            className="hover:text-sky-600"
          >
            Frank Francione
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
