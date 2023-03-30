import React from "react";
import { kelvinToCelsius, timeConvert, longDateFromTime } from "./DataFunction";
import WeatherIcon from "./WeatherIcon";

export default function LocationDetails({ location }) {
  return (
    <main className="location">
      <div className="location--details">
        <h1 className="location--name">{location.name}</h1>
        <h3 className="location--country">{location.sys.country}</h3>
        <h3 className="location--longdate">{longDateFromTime(location.dt)}</h3>
        <h3 className="location--currentTime">{timeConvert(location.dt)}</h3>
        <h2>{kelvinToCelsius(location.main.temp)}°C</h2>
        <WeatherIcon icon={location.weather[0].icon} isLocation />
        <p>{location.weather[0].main}</p>
      </div>
      <div className="location--weather">
        <h4 className="location--add">feels like</h4>
        <h3 className="location--result">
          {kelvinToCelsius(location.main.feels_like)}°C
        </h3>
        <h4 className="location--add">humidity</h4>
        <h3 className="location--result">{location.main.humidity}%</h3>
        <h4 className="location--add">sunrise</h4>
        <h3 className="location--result">
          {timeConvert(location.sys.sunrise)}
        </h3>
        <h4 className="location--add">sunset</h4>
        <h3 className="location--result">{timeConvert(location.sys.sunset)}</h3>
      </div>
    </main>
  );
}
