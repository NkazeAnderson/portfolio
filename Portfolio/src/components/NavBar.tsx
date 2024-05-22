import React, { useState } from "react";

function NavLink({ isActive, text }: { isActive: boolean; text: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-black cursor-pointer"
      onMouseEnter={() => {
        setHovered(!hovered);
      }}
      onMouseLeave={() => {
        setHovered(!hovered);
      }}
    >
      <p className=" font-bold">{text}</p>
      <div
        className={`p-1 w-full ${isActive ? "bg-primary" : " "}${
          hovered && !isActive ? "bg-primary" : " "
        }`}
      ></div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-black px-[50px]">
      <h1 className=" text-primary">NKAZE@LOCALHOST</h1>
      <div className="flex space-x-10">
        <p className="text-primary">#ls</p>
        <div className="flex space-x-4">
          <NavLink isActive={true} text="Home" />
          <NavLink isActive={false} text="About Me" />
          <NavLink isActive={false} text="Projects" />
          <NavLink isActive={false} text="Blog" />
          <NavLink isActive={false} text="Contact me" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
