import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HunelProvider, HunelCreditCard } from "reactjs-credit-card";

const hunel = new HunelCreditCard(); //needed for the credit card

ReactDOM.render(
  <BrowserRouter basename="/efarm">
    <HunelProvider config={hunel}>
      <App />
    </HunelProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
