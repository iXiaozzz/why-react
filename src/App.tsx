import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useAuth } from "./context/auth-context";
import Login from '@/pages/login';
import { routerConfig } from "@/config/index";
import "./App.css";
function Layout() {
  return (
    <HashRouter>
      <Switch>
        {routerConfig.routes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Switch>
    </HashRouter>
  );
}
function App() {
  const { user } = useAuth();
  console.log("user:", user);
  return user?.token ?  <Layout/> : <Login />;
}

export default App;
