import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div id="loader-container">
        {/* Start::Loader  */}
        <div className="loading">
          <div className="loading_circle loading_blue"></div>
          <div className="loading_circle loading_coral"></div>
          <div className="loading_circle loading_orange"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
