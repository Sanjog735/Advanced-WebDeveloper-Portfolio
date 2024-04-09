import React from "react";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrolltoTop from "./components/ScrolltoTop";

const App = () => {
  return (
    <div>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ScrolltoTop />
    </div>
  );
};

export default App;
