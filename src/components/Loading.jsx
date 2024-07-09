import React from "react";

const Loading = () => {
  return (
    <div className="h-screen text-center justify-center flex flex-col">
      <h1 className="animate-bounce font-bold text-3xl sm:text-5xl md:text-8xl text-sky-500">
        LOADING...
      </h1>
      <p className="font-thin">Oobi Goobi Goo.</p>
    </div>
  );
};

export default Loading;
