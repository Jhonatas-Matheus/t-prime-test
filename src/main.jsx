import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/global.js";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer/>
      <GlobalStyle />
      <App />
  </React.StrictMode>
);
