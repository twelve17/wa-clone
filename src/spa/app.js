import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import MainContainer from './components/main-container.react';

require('./normalize.scss');

ReactDOM.render(<MainContainer />, document.getElementById('root'));

// import Increment from "./increment.react";
// ReactDOM.render(<Increment />, document.getElementById("root"));
