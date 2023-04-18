import React from "react";
import "./PrimaryBtn.css";

const PrimaryBtn = ({ children, className, onClick }) => {
  return (
    <button className={`${className} primary-button`} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
