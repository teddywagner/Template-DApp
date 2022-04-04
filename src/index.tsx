import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://ngby0hxyi8bz.usemoralis.com:2053/server" appId="GNWxhGTEgXSLGSkW7KkJ5CIDAFMOXYqghKYut6na">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);