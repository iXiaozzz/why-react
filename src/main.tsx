import React from "react";
import ReactDOM from "react-dom";
import { AppProviders } from "./context/index";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import "./base.less";
// import 'antd-mobile/es/global'
const client = new ApolloClient({
  uri: "https://tyoku.sse.codesandbox.io/graphql",
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppProviders>
        <App />
      </AppProviders>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
