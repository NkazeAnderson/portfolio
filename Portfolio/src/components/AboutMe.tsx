import React from "react";
import Heading from "./heading";
import ClimbMan from "./climbMan";

function Skill({
  url,
  text,
  large,
}: {
  url: string;
  text: string;
  large?: boolean;
}) {
  return (
    <div
      className={`inline-flex p-[10px] space-x-4 bg-black items-center ${
        large ? "rounded-[30px]" : "rounded-[15px]"
      }`}
    >
      <img
        className={` ${
          large
            ? "w-[100px] h-[100px] rounded-[30px]"
            : "w-[50px] h-[50px] rounded-[15px]"
        }`}
        src={url}
        alt="skill"
      />
      {!large && <h2>{text}</h2>}
    </div>
  );
}

function AboutMe() {
  return (
    <div className="px-[50px]">
      <Heading text="About Me" />
      <div className="flex">
        <div className="w-1/2 flex ">
          <ClimbMan />
          <div>
            <div>
              <Skill text="JavaScript" url="/JavaScript-logo.png" large />
            </div>
            <Skill text="JavaScript" url="/JavaScript-logo.png" />
          </div>
        </div>
        <div className="w-1/2">
          <p>
            My journey as web developer started back in 2018 when i reunited
            with a friend who just completed his bachelors degree in computer
            sciences. He spent his time reading and coding and I was like wow,
            that’s amazing. Ever since then I had a hook on it. I eventually
            joined him to write my first HELLO World in HTML :-). It was not
            long till I started writing in JavaScript that I got to realize how
            demanding the field is and as most junior developers do, I diverted
            to WordPress. After a while I got realize the power in JavaScript
            and Python that I embanked in building my skills and today I have
            built and participated in several real world applications. I now
            focus on the React ecosystem for both mobile and web development.
            For back-end development I enjoy using ExpressJS, FastApi and
            Django. I am a cloud developer developing solutions on Amazon Web
            Services - AWS
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
