// import { useState } from "react";
import React, { Suspense } from "react";
import {
  Navbar,
  ComingSoon,
  Footer,
  DemoPage,
  TextDemo,
  SoundDemo,
  BackgroundOne,
  Loading,
} from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RenderSelect from "./pages/RenderSelect";
import AboutMe from "./pages/AboutMe";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/renders">
            <Route index element={<RenderSelect />} />
            <Route path="logo" element={<DemoPage />} />
            <Route path="3dtext" element={<TextDemo />} />
            <Route path="comingsoon" element={<ComingSoon />} />
            <Route path="sound" element={<SoundDemo />} />
            <Route path="backgroundone" element={<BackgroundOne />} />
          </Route>
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
