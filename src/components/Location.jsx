import React, { useState, useEffect } from "react";
import { kelvinToCelsius, timeConvert, longDateFromTime } from "./DataFunction";
import WeatherIcon from "./WeatherIcon";

export default function LocationDetails({ location }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="location">
      <div className="location--details">
        <h1 className="location--name">{location.name}</h1>
        <h3 className="location--country">{location.sys.country}</h3>
        <h3 className="location--longdate">{longDateFromTime(location.dt)}</h3>
        <h3 className="location--currentTime">{time.toLocaleTimeString()}</h3>
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
