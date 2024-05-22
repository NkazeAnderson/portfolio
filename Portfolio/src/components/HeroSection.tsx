import React from "react";
import Button from "./button";

function HeroSection() {
  return (
    <div className="w-full flex px-[50px]">
      <div className="w-1/2 py-5">
        <p className="text-primary font-bold">#WHOAMI</p>
        <p>I am called</p>
        <p className="text-center">Nkaze Anderson</p>
        <h1 className="text-center">A FULLSTACK DEVELOPER</h1>
        <p>
          I stand for meaningful digital solutions and satisfying user
          experience
        </p>
        <p className="text-center">An expert in JavaScript and Python</p>
        <div className="flex justify-center w-full py-16">
          <Button text="Resume" />
        </div>
      </div>
      <div className="w-1/2 pr-5">
        <img
          className="ml-auto my-auto"
          src="/nkaze.png"
          alt="Nkaze Anderson the fullstack web developer in Cameroon"
        />
      </div>
    </div>
  );
}

export default HeroSection;
