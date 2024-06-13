import { useContext } from "react";
import BlogCard from "./BlogCard";
import { BlogsAndPost } from "../App";

function BlogsPage() {
  const { blogs } = useContext(BlogsAndPost);
  return (
    <div className="w-[550px] mx-auto space-y-20 spac pb-20">
      {blogs.map((entry) => (
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

export default BlogsPage;
