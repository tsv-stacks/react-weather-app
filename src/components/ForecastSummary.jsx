/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import { getDay } from "./DataFunction";

export default function Card({ userInput }) {
  const [forecastData, setForecastData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let timeoutId;

    axios
      .get(
        `https://cmd-shift-weather-app.onrender.com/forecast?city=${
          userInput || "London"
        }`
      )
      .then((response) => {
        setForecastData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 500) {
            setErrorMessage("Oops, server error, try again later.");
            console.error("Server error", error);
          } else if (error.response.status === 404) {
            setErrorMessage("Oops, city not found.");
            console.error("City not found", error);
          } else {
            setErrorMessage("Oops, something went wrong.");
            console.error("Error", error);
          }

          timeoutId = setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        }
      });
    return () => clearTimeout(timeoutId);
  }, [userInput]);

  return (
    <>
      {errorMessage && (
        <div className="error-message">
          <h2>{errorMessage}</h2>
        </div>
      )}
      <section className="cards">
        {forecastData ? (
          forecastData.forecasts.map((card, i) => {
            return (
              <Forecast
                key={getDay(forecastData.forecasts[i].date)}
                data={forecastData.forecasts[i]}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </>
  );
}
