import React from "react";
import SocialLink from "./components/socialLink";

function Footer() {
  return (
    <div className=" flex w-full  bg-black py-[50px] items-center justify-between px-[50px]">
      <div>
        <h1 className="text-primary">Nkaze Anderson</h1>
      </div>
      <div className="flex space-x-4">
        <SocialLink url="/youtube.jpg" />
        <SocialLink url="/tiktok.jpg" />
        <SocialLink url="/upwork.png" />
        <SocialLink url="/wa.png" />
      </div>
      <p className="text-primary font-bold">#exit</p>
    </div>
  );
}

export default Footer;
