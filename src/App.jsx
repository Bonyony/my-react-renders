// import { useState } from "react";
import React from "react";
import { Navbar, ComingSoon, Footer, DemoPage, TextDemo } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RenderSelect from "./pages/RenderSelect";
import AboutMe from "./pages/AboutMe";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/renders" element={<RenderSelect />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
