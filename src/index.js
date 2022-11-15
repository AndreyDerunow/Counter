import React from "react";
// import reactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
