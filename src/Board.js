import React from "react";
import Square from "./Square";
import Knight from "./Knight";
import PropTypes from "prop-types";

Board.propTypes = {
  knightPosition: PropTypes.array,
}

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor (i / 8);
  const isPieceHere = x === knightX && y === knightY;
  const isBlack = (x + y) % 2 === 1;
  const piece = isPieceHere ? <Knight /> : null;

  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <Square isBlack={isBlack}>{piece}</Square>
    </div>
  )
}

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  )
}