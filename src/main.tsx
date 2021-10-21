import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { routerConfig } from "./config/index";
import "./base.less";

// import App from "./App";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        {routerConfig.routes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Switch>
    </HashRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
