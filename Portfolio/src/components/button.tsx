import React from "react";

function Button({ text }: { text: string }) {
  return (
    <button className="px-[32px] py-[16px] gradientBGPrimary rounded-[16px]">
      <p className=" font-bold"> {text}</p>
    </button>
  );
}

export default Button;
