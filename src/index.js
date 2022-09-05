import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { APIProvider } from "./APIContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<APIProvider child={<App />}></APIProvider>);
