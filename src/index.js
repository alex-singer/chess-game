import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Board from "./Board";
import { observe } from "./Game";

let root = document.getElementById('root');
    
observe(knightPosition =>
  ReactDOM.render((
    <div style={{ width: "1000px", height: "1000px" }}>
      <Board knightPosition={knightPosition} />
    </div>), root
  )
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
