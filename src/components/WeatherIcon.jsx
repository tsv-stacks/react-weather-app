import React from "react";
import { getIconCode } from "./DataFunction";

export default function WeatherIcon({ icon, isLocation }) {
  const nameClass = isLocation ? "location" : "card";
  const iconCheck = isLocation ? icon : getIconCode(icon);
  return (
    <div className="forecast-summary__icon" data-testid="forecast-icon">
      <img
        className={`${nameClass}--weather-icon`}
        src={`https://openweathermap.org/img/w/${iconCheck}.png`}
        alt="Weather Icon"
        data-testid="forecast-icon"
      />
    </div>
  );
}
