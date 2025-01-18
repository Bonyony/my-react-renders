import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-4 ">
        <aside className="flex flex-row justify-between px-2 w-full">
          <p>
            Copyright © {new Date().getFullYear()} - Made with love by{" "}
            <a
              href="https://frankfrancione.com/"
              target="_blank"
              className="hover:text-sky-600"
            >
              Frank Francione
            </a>
          </p>
          <p className="font-bold">Look at these Wicked Shapes!</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
