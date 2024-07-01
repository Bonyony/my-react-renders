// import { useState } from "react";
import React from "react";
import { Navbar, ComingSoon, Footer, DemoPage, TextDemo } from "./components";
// import { Canvas } from "@react-three/fiber";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <DemoPage />
      <TextDemo />
      <ComingSoon />
      <Footer />
    </>
  );
}

export default App;
