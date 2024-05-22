import React from "react";
import ladder from "../assets/Ladder.svg";
import climbLeft from "../assets/climb-left.svg";
import climbRight from "../assets/climb-right.svg";

function ClimbMan() {
  return (
    <div className="relative inline-block px-[50px]">
      <img src={ladder} alt="ladder" />
      <div className=" relative bottom-[160px]">
        <img className="absolute opacity-0" src={climbLeft} alt="climb left" />
        <img className="absolute" src={climbRight} alt="climb right" />
      </div>
    </div>
  );
}

export default ClimbMan;
