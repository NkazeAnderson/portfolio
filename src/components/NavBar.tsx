import React, { useState } from 'react';
import { Link, NavLink as RouteLink } from 'react-router-dom';

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
        className={`p-1 w-full ${isActive ? 'bg-primary' : ' '}${
          hovered && !isActive ? 'bg-primary' : ' '
        }`}
      ></div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="block md:flex items-center justify-between bg-black px-1 md:px-[50px]">
      <Link to={''}>
        <h1 className=" text-primary hidden md:block">NKAZE@LOCALHOST</h1>
        <h2 className=" text-primary block md:hidden">NKAZE@LOCALHOST</h2>
      </Link>
      <div className="flex space-x-10">
        <p className="text-primary hidden md:block">#ls</p>
        <div className="flex space-x-4">
          <RouteLink to="">
            {({ isActive }) => <NavLink isActive={isActive} text="Home" />}
          </RouteLink>
          <RouteLink to="projects">
            {({ isActive }) => <NavLink isActive={isActive} text="Projects" />}
          </RouteLink>
          <RouteLink to="blogs">
            {({ isActive }) => <NavLink isActive={isActive} text="Blogs" />}
          </RouteLink>
          <RouteLink to="admin">
            {({ isActive }) => <NavLink isActive={isActive} text="Sudo Root" />}
          </RouteLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
