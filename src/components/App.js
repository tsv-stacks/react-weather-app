/* eslint-disable import/no-extraneous-dependencies */
import "../styles/App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/Location.css";
import openweatherAPI from "../data/openweather.json";
import ForecastSummary from "./ForecastSummary";
import "../styles/Card.css";
import Location from "./Location";

function App() {
  const [location, setLocation] = useState(openweatherAPI);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${API_KEY}`;
    axios
      .get(URL)
      .then((response) => {
        setLocation(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Location location={location} />
      <ForecastSummary />
    </div>
  );
}

export default App;
