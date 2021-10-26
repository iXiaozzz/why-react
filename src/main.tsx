import React from "react";
import ReactDOM from "react-dom";
import {AppProviders} from './context/index';
import App from "./App";
import "./base.less";

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
     <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
