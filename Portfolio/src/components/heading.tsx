import React from "react";
import enter from "../assets/enter.svg";

function Heading({ text }: { text: string }) {
  return (
    <div className="flex justify-center space-x-5 items-center my-[50px]">
      <p className="text-primary font-bold">#cd</p>
      <h1>{text}</h1>
      {/* Using image because no animations required */}
      <img src={enter} alt="" />
    </div>
  );
}

export default Heading;
