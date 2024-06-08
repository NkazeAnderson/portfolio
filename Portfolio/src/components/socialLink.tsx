import React from "react";

function SocialLink({ url, link }: { url: string; link: string }) {
  return (
    <div>
      <a href={link} target="blank">
        <img className=" h-[50px] rounded-2xl" src={url} alt="" />
      </a>
    </div>
  );
}

export default SocialLink;
