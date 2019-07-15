import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

//Internal dependencies
import App from "./components/app";
import "./styles.css";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
