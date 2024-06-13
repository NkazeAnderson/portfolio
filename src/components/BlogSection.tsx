import React, { useContext } from 'react';
import Heading from './heading';
import BlogCard from './BlogCard';
import { BlogsAndPost } from '../App';

function BlogSection() {
  const { blogs } = useContext(BlogsAndPost);
  const Last2 = blogs.length < 2 ? blogs : blogs.slice(0, 2);
  return (
    <div className="px-4 md:px-[50px]">
      <Heading text="Blogs" />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        {Last2.map((entry) => (
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
