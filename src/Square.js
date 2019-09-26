import React from "react";
import PropTypes from "prop-types";

Square.propTypes = {
  isBlack: PropTypes.bool,
  children: PropTypes.node,
}

export default function Square ({ isBlack, children}) {
  const fill = isBlack ? "black" : "white";
  return (
    <div 
      style={{ 
        backgroundColor: fill,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  )
}