import { useState } from "react";
import React from "react";
import { Navbar, ComingSoon, Footer } from "./components";
// import { Canvas } from "@react-three/fiber";

import "./App.css";

function App() {
  return (
    <>
      <div className="text-4xl">Hello Me</div>
      <Navbar />
      <ComingSoon />
      <Footer />
    </>
  );
}

export default App;
