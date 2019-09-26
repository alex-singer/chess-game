import React from 'react'
import PropTypes from "prop-types";
import BlackKnightIcon from "./icons/BlackKnight";
import WhiteKnightIcon from "./icons/WhiteKnight";

Knight.propTypes = {
  isBlack: PropTypes.bool,
}

export default function Knight ({ isBlack }) {
  const icon = isBlack 
    ? <BlackKnightIcon width="100%" height="100%" viewBox="0 0 50 50"/> 
    : <WhiteKnightIcon width="100%" height="100%" viewBox="0 0 50 50"/>;
  return <div>{icon}</div>;
}

