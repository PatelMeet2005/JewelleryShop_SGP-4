import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar/Navigation";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/Aboutus/Aboutus";

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
