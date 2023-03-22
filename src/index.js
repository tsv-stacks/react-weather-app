import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import Location from "./components/Location";
import "./styles/Location.css";
import location from "./data/openweather.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Location location={location} />
  </React.StrictMode>
);
