import React from "react";
import folderBack from "../assets/folderBack.svg";
import folderFront from "../assets/folderFront.svg";
function FolderComponent() {
  return (
    <div className="relative ">
      <div className=" relative h-[250px] w-full z-40 ">
        <img className="absolute w-full bottom-0" src={folderBack} alt="" />
        <div className="absolute w-full bottom-0 p-2">
          <img
            className=" mx-auto h-[180px] w-full object-fit relative bottom-0"
            src="/foodApp.jpg"
            alt="food app"
          />
        </div>
        <img className="absolute w-full bottom-0" src={folderFront} alt="" />
      </div>
      <div className="">
        <p className="text-center font-bold">Food Catering App</p>
      </div>
    </div>
  );
}

export default FolderComponent;
