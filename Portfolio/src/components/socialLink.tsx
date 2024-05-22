import React from "react";

function SocialLink({ url }: { url: string }) {
  return (
    <div>
      <img className=" h-[60px] rounded-2xl" src={url} alt="" />
    </div>
  );
}

export default SocialLink;
