import React from 'react';
import './App.css';
import Square from "./Square";
import Knight from "./Knight";

function App() {
  return (
    <Square isBlack>
      <Knight/>
    </Square>
  );
}

export default App;
