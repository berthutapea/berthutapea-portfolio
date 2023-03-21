import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="px-2 md:px-12 py-16 min-h-screen">
      <div className="blog_cover">
        <h1 className="text-2xl md:text-5xl font-semibold text-primary">
          Coding Blog by Gilbert Hutapea
        </h1>
        <motion.button
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.25, type: "spring" }}
          className="font-medium px-8 py-2 border border-white rounded flex items-center gap-2 hover:border-primary hover:text-primary focus:scale-90 duration-300"
          onClick={() => window.scrollBy(0, 550)}
        >
          <span>Read Below</span> <BsArrowDown />
        </motion.button>
      </div>

      <Outlet />
    </div>
  );
};

export default Blog;
