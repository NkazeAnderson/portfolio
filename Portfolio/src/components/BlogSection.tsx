import React, { useContext } from "react";
import Heading from "./heading";
import BlogCard from "./BlogCard";
import { BlogsAndPost } from "../App";

function BlogSection() {
  const { blogs } = useContext(BlogsAndPost);
  const Last4 = blogs.length < 2 ? blogs : blogs.slice(0, 2);
  return (
    <div className="px-[50px]">
      <Heading text="Blogs" />
      <div className=" grid grid-cols-2 gap-3">
        {Last4.map((entry) => (
          <BlogCard
            title={entry.title}
            description={entry.description}
            image={entry.image}
            link={entry.link}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
