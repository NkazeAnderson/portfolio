import React from "react";
import Heading from "./heading";
import FolderComponent from "./folderComponent";

function Projects() {
  return (
    <div className="px-[250px]">
      <Heading text="Projects" />
      <div className="grid grid-cols-3 gap-4 gap-y-10">
        <FolderComponent />
        <FolderComponent />
        <FolderComponent />
        <FolderComponent />
      </div>
    </div>
  );
}

export default Projects;
