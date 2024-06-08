import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { BlogsAndPost } from "../App";

function ProjectsPage() {
  const { projects } = useContext(BlogsAndPost);
  return (
    <div className="w-[550px] mx-auto space-y-10 pb-20">
      {projects.map((entry) => (
        <div>
          <BlogCard
            title={entry.title}
            description={entry.description}
            image={entry.image}
            link={entry.link}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProjectsPage;
