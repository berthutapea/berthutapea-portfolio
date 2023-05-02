import React from "react";
import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div className="px-2 md:px-12 py-16 min-h-screen ">
      <Outlet />
    </div>
  );
};

export default Blog;