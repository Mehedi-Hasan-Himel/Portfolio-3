import React from "react";
// import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import { Route, Routes } from "react-router-dom";

const AnimRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
  );
};

export default AnimRoutes;
