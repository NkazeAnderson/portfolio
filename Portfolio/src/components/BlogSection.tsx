import React from "react";
import Heading from "./heading";
import BlogCard from "./BlogCard";

function BlogSection() {
  return (
    <div className="px-[50px]">
      <Heading text="Blogs" />
      <div className=" grid grid-cols-2 gap-3">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default BlogSection;
