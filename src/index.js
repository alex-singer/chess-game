import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Square from "./Square";
import Knight from './Knight';

ReactDOM.render(
  <>
    <Square >
      <Knight ></Knight>
    </Square> 
    <Square isBlack>
      <Knight ></Knight>
    </Square> 
  </>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
