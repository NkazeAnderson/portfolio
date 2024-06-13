import React, { useRef } from "react";
import folderBack from "../assets/folderBack.svg";
import folderFront from "../assets/folderFront.svg";
import { blogsAndPostT } from "../App";
function FolderComponent({ title, image, link }: Partial<blogsAndPostT>) {
  const aElement = useRef<null | HTMLAnchorElement>(null);
  return (
    <div
      className="relative folder hover:cursor-pointer"
      onClick={() => {
        aElement.current?.click();
      }}
    >
      <div className=" relative h-[250px] w-full z-40 ">
        <img className="absolute w-full bottom-0" src={folderBack} alt="" />
        <div className="absolute w-full bottom-0 p-2">
          <img
            className=" mx-auto h-[180px] w-full object-fit relative bottom-0"
            src={image}
            alt="food app"
          />
        </div>
        <img className="absolute w-full bottom-0" src={folderFront} alt="" />
      </div>
      <div className="">
        <a ref={aElement} href={link} target="blank">
          <p className="text-center font-bold">{title}</p>
        </a>
      </div>
    </div>
  );
}

export default FolderComponent;
