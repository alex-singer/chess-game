import React from 'react'
import PropTypes from "prop-types";

const whiteKnightUnicode = '\u2658';
const blackKnightUnicode = '\u265e';

Knight.propTypes = {
  isBlack: PropTypes.bool,
}

export default function Knight ({ isBlack }) {
  const glyph = isBlack ? blackKnightUnicode : whiteKnightUnicode;
  const fill = isBlack ? "white" : "black";
  return <span style={{ color: fill }}>{whiteKnightUnicode}{blackKnightUnicode}</span>;
}

Knight.defaultProps = {
  fill: "black",
};

 // &#x265e
