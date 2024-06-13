import React, { useContext, useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { BlogsAndPost } from '../App';

function ProjectsPage() {
  const { projects } = useContext(BlogsAndPost);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<typeof projects>([]);

  useEffect(() => {
    search && filter();
  }, [search]);

  function filter() {
    const res = projects.filter((item) => {
      return (
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    });
    setResults(res);
  }

  return (
    <div className="w-full lg:w-[550px] px-2 mx-auto space-y-10 pb-20">
      <div className="py-6">
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.currentTarget.value);
          }}
          style={{
            opacity: 1,
            background: 'black',
            padding: '5px',
            borderRadius: '10px',
            width: ' 100%',
          }}
        />
      </div>
      {search
        ? results.map((entry) => (
            <div>
              <BlogCard
                title={entry.title}
                description={entry.description}
                image={entry.image}
                link={entry.link}
              />
              <hr />
            </div>
          ))
        : projects.map((entry) => (
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
