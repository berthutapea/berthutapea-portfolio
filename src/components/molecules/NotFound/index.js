import React from "react";
import { PrimaryBtn } from "../../../components";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
      <h1 className="text-[8rem] font-bold text-primary animate-bounce">404</h1>
      <div className="w-24 h-1 md:w-1 md:h-24 bg-primary my-6 md:my-0 md:mx-8"></div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl text-center mb-4">
          Sorry, This page isn't available
        </h2>
        <Link to="/">
          <PrimaryBtn>
            <span>Go To HomePage</span>
            <span>
              <FaHome></FaHome>
            </span>
          </PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
