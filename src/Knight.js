import React from 'react'
import PropTypes from "prop-types";

let whiteKnightUnicode = '\u265e';

Knight.propTypes = {
  isBlack: PropTypes.bool,
}

export default function Knight ({ isBlack }) {
  const fill = isBlack ? "black" : "white";
  return <span style={{ color: fill }}>{whiteKnightUnicode}</span>;
}

Knight.defaultProps = {
  fill: "black",
};

 // &#x265e
