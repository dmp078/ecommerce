import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { APIProvider } from "./APIContext";
import { AddProvider } from "./AddContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AddProvider>
  <APIProvider>
    <App />
  </APIProvider>
</AddProvider>);
