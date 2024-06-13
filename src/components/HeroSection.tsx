import React, { useRef } from 'react';
import Button from './button';

function HeroSection() {
  const aElement = useRef<null | HTMLAnchorElement>(null);
  return (
    <div className="w-full block  md:flex px-[50px]">
      <div className="w-full md:w-1/2 py-5  heroText">
        <p className="text-primary font-bold">#WHOAMI</p>
        <p>I am called</p>
        <p className="text-center">Nkaze Anderson</p>
        <h1 className="text-center">A FULLSTACK DEVELOPER</h1>
        <p>
          I stand for meaningful digital solutions and satisfying user
          experience
        </p>
        <p className="text-center">An expert in JavaScript and Python</p>
        <div className="flex justify-center w-full pt-16">
          <a
            href="https://cloud.appwrite.io/v1/storage/buckets/66642a18002ff1752f34/files/6664b6cc0019097166cb/view?project=666427f80028d42b5924"
            target="blank"
            ref={aElement}
          ></a>
          <Button
            text="Resume"
            action={() => {
              aElement.current?.click();
            }}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 pr-5">
        <img
          className="ml-auto my-auto heroPicture"
          src="/nkaze.png"
          alt="Nkaze Anderson the fullstack web developer in Cameroon"
        />
      </div>
    </div>
  );
}

export default HeroSection;
