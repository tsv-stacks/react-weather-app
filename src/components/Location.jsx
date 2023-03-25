import React from "react";
import { kelvinToCelsius, timeConvert } from "./DataFunction";

export default function LocationDetails({ location }) {
  const tempInC = kelvinToCelsius(location.main.temp);
  const feelsLike = kelvinToCelsius(location.main.feels_like);
  const formattedSunriseTime = timeConvert(location.sys.sunrise);
  const formattedSunsetTime = timeConvert(location.sys.sunset);

  return (
    <main className="location">
      <div className="location--details">
        <h1>{location.name}</h1>
        <h3>{location.sys.country}</h3>
        <h3>Date, time</h3>
        <h2>{tempInC}°C</h2>
        <p>icon</p>
        <p>{location.weather[0].main}</p>
      </div>
      <div className="location--weather">
        <h4>feels like</h4>
        <h3>{feelsLike}°C</h3>
        <h4>humididty</h4>
        <h3>{location.main.humidity}%</h3>
        <h4>sunrise</h4>
        <h3>{formattedSunriseTime}</h3>
        <h4>sunset</h4>
        <h3>{formattedSunsetTime}</h3>
      </div>
    </main>
  );
}
