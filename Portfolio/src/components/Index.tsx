import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import BlogSection from "./BlogSection";
import Contact from "../Contact";

function Index() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      <BlogSection />
      <Contact />
    </>
  );
}

export default Index;
