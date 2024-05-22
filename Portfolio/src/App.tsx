import gsap from "gsap";
import { useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import BlogSection from "./components/BlogSection";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  const cursorRef = useRef(null);
  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (isTouchDevice || !cursor) {
      return;
    }

    window.addEventListener("mousemove", (e) => {
      const { x, y } = e;
      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.7,
        ease: "power4",
      });
    });

    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });
  }, []);

  return (
    <div className="w-screen h-screen bg-flame-path relative z-0 overflow-hidden">
      {/* mouseFollower */}
      <div className="w-screen  h-screen absolute z-10 overflow-hidden">
        <div
          ref={cursorRef}
          className="w-[60px] h-[60px] p-1 bg-flame rounded-full relative top-[-30px] left-[-30px]"
        ></div>
      </div>

      {/* Tiles background */}
      <div className="w-screen  h-screen absolute z-20 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/background.png"
          alt="background tiles"
        />
      </div>

      {/* Content */}
      <div className="w-screen  h-screen absolute z-30 text-white overflow-hidden ">
        <div className="fixed w-full z-50">
          <NavBar />
        </div>
        <main className="w-full h-full overflow-y-scroll pt-[100px]">
          <HeroSection />
          <AboutMe />
          <Projects />
          <BlogSection />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
