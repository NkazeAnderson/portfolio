import React, { useRef } from "react";
import { blogsAndPostT } from "../App";

function BlogCard({ title, description, image, link }: blogsAndPostT) {
  const aElement = useRef<null | HTMLAnchorElement>(null);
  return (
    <div
      className=" hover:cursor-pointer"
      onClick={() => {
        aElement.current?.click();
      }}
    >
      <img className="w-full h-[350px]" src={image} alt="" />
      <h2 className="text-primary">{title}</h2>
      <p>{description}</p>
      <p className=" font-bold text-primary">
        <a ref={aElement} href={link ?? "#"} target="blank">
          Read More
        </a>
      </p>
    </div>
  );
}

export default BlogCard;
