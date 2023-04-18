import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div id="loader-container">
        {/* Start::Loader 01 */}
        {/* <div id="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}

        {/* Start::Loader 02 */}
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
