import React from 'react';
import ladder from '../assets/Ladder.svg';
import LeftClimbMan from './leftClimbMan';
import RightClimbMan from './rightClimbMan';

function ClimbMan() {
  return (
    <div className="relative inline-block md:px-[50px]">
      <img src={ladder} alt="ladder" />
      <div id="climbMan" className=" relative bottom-[160px]">
        <span className="absolute">
          <LeftClimbMan />
        </span>
        <span className="absolute">
          <RightClimbMan />
        </span>
      </div>
    </div>
  );
}

export default ClimbMan;
