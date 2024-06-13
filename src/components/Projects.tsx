import React, { useContext } from 'react';
import Heading from './heading';
import FolderComponent from './folderComponent';
import { BlogsAndPost } from '../App';

function Projects() {
  const { projects } = useContext(BlogsAndPost);
  return (
    <div className="px-3 lg:px-[250px]">
      <Heading text="Projects" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 gap-y-10">
        {projects.map((entry) => (
          <FolderComponent
            title={entry.title}
            link={entry.link}
            image={entry.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
