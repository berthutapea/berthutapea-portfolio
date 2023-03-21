import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import placeholderImage from "../../assets/placeholder.jpg";
import blogs from "../../assets/blogs";

const BlogIndex = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-semibold text-center">
        Popular <span className="text-primary">Blogs</span>
      </h1>
      <div className="mt-10">
        {blogs?.map((blog) => {
          const { _id, title, date, img, description, path } = blog;
          const isOdd = _id % 2 === 0;
          return (
            <div
              key={_id}
              className={`${
                isOdd ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
              } w-full flex items-center justify-between gap-8 my-20 rounded-lg min-h-32`}
            >
              <div
                className={` ${
                  isOdd
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                } w-full md:w-2/3`}
              >
                <LazyLoadImage
                  placeholderSrc={placeholderImage}
                  src={img}
                  className="rounded-lg blog_image"
                />
              </div>
              <div className="">
                <h2 className="text-2xl font-medium text-primary cursor-pointer">
                  <Link to={"/blog/" + path}>{title}</Link>
                </h2>
                <span className="text-neutral text-xs">
                  Published at: <strong>{date}</strong>
                </span>
                <p className="text-neutral mt-2 mb-6">
                  {description?.slice(0, 200)} ...
                </p>
                <Link to={"/blog/" + path}>
                  <button className="px-6 py-1 border rounded hover:border-primary duration-300">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogIndex;
