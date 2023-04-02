/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import { getDay } from "./DataFunction";

export default function Card({ userInput }) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://cmd-shift-weather-app.onrender.com/forecast?city=${
          userInput || "London"
        }`
      )
      .then((response) => {
        setForecastData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInput]);

  return (
    <section className="cards">
      {forecastData &&
        forecastData.forecasts.map((card, i) => {
          return (
            <Forecast
              key={getDay(forecastData.forecasts[i].date)}
              data={forecastData.forecasts[i]}
            />
          );
        })}
    </section>
  );
}
