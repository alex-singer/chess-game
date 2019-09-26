import React from "react";
import PropTypes from "prop-types";

Square.propTypes = {
  isBlack: PropTypes.bool,
  children: PropTypes.node,
}

export default function Square ({ isBlack, children}) {
  const fill = isBlack ? "black" : "white";
  const stroke = isBlack ? "0 0 1em white" : "0 0 10em black";
  return (
    <div 
      style={{ 
        backgroundColor: "blue",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  )
}