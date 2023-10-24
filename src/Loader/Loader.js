import React from "react";
import "./Loader.css";

function Loader({ border, size , margin }) {
  console.log(border, size)
  return (
    <div
      className="loader"
      style={{
        border: `${border}px solid #f6f6f6`,
        borderTop: `${border}px solid #ccc7c7`,
        width: `${size}px`,
        height: `${size}px`,
        margin:`${margin}px`
      }}
    ></div>
  );
}

export default Loader;
