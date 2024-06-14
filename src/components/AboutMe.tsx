import React from 'react';
import Heading from './heading';
import ClimbMan from './climbMan';
import { skills } from '../constants';

function Skill({
  url,
  text,
  large,
  level,
}: {
  url: string;
  text: string;
  large?: boolean;
  level: number;
}) {
  return (
    <div
      className={` level-${level} skill  p-[10px] opacity-0 space-x-4 bg-black items-center ${
        large ? 'rounded-[30px]' : 'rounded-[15px]'
      }`}
    >
      <img
        className={` ${
          large
            ? 'w-[50px] md:w-[100px] h-[50px] md:h-[100px] rounded-lg  md:rounded-[30px]'
            : 'w-[30px] h-[30px] rounded-[10px]'
        }`}
        src={url}
        alt="skill"
      />
      {!large && <h2 className=" text-[16px] md:text-32">{text}</h2>}
    </div>
  );
}

function AboutMe() {
  return (
    <div id="about" className=" px-3 md:px-[50px]">
      <Heading text="About Me" />
      <div className="block lg:flex">
        <div className="w-full lg:w-1/2  relative flex">
          <ClimbMan />
          <div>
            <div className="  absolute bottom-14 space-y-4">
              {skills.map((level, index) => (
                <div className=" flex space-x-4 space-y-9 md:space-y-4 flex-wrap">
                  {level.map((skill) => (
                    <>
                      <span className={`longSkill longSkill-${index} hidden`}>
                        <Skill
                          text={skill.name}
                          url={skill.img}
                          level={index}
                        />
                      </span>
                      <span className={`largeSkill largeSkill-${index} hidden`}>
                        <Skill
                          text={skill.name}
                          url={skill.img}
                          large
                          level={index}
                        />
                      </span>
                    </>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
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
