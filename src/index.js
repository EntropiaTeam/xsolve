import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import style from '../style/scss/style.scss';

import App from './components/app';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.querySelector('.container'));


  exports.printMsg = function() {
    console.log("This is a message from the demo package");
  }