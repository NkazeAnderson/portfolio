import React from 'react';
import SocialLink from './components/socialLink';

function Footer() {
  return (
    <div className=" flex w-full  bg-black/75 items-center justify-between px-[50px] mt-auto">
      <div className=" hidden md:block">
        <h1 className="text-primary">Nkaze Anderson</h1>
      </div>
      <div className="flex space-x-4">
        <SocialLink
          url="/youtube.jpg"
          link="https://youtube.com/@webdevrocket?si=cWPpL419BYgY3Ekc"
        />
        <SocialLink
          url="/tiktok.jpg"
          link="https://www.tiktok.com/@nkaze.the.web.developer?_t=8n2MZylf2TF&_r=1"
        />
        <SocialLink
          url="/upwork.png"
          link="https://www.upwork.com/freelancers/~01944fc3e98aaabf26?mp_source=share"
        />
        <SocialLink url="/wa.png" link="https://wa.me/237683403750" />
      </div>
      <p className="text-primary font-bold">#exit</p>
    </div>
  );
}

export default Footer;
