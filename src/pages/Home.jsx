import React from "react";
import { DemoPage, TextDemo } from "../components";

const Home = () => {
  return (
    <>
      <div className="p-6">
        <h1 className="italic font-bold flex justify-center text-2xl sm:text-5xl ">
          Welcome to my playground
        </h1>
        <div className="flex justify-center ">
          <p className="my-5 text-justify text-wrap container max-w-[600px] px-3">
            Once upon a time, this project page was very over-designed and
            clutered. I've completely cut the fat so that the 3D renders and
            animations can take center stage, as they should have from the
            beginning! <br />
            <br />I highly recommend viewing this page on desktop with a mouse,
            as you may miss out on features otherwise. The page is fully
            responsive, but the renders do not really come across as well on
            mobile.
          </p>
        </div>
      </div>
      <DemoPage />
    </>
  );
};

export default Home;
