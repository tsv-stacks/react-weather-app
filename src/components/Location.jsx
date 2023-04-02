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
        <h1 className="location--name text">{location.name}</h1>
        <h3 className="location--country text">{location.sys.country}</h3>
        <p className="location--longdate text">
          {longDateFromTime(location.dt)}
        </p>
        <p className="location--currentTime num">{time.toLocaleTimeString()}</p>
        <h2 className="num">{kelvinToCelsius(location.main.temp)}°C</h2>
        <WeatherIcon icon={location.weather[0].icon} isLocation />
        <h3 className="location--descrip text">{location.weather[0].main}</h3>
      </div>
      <div className="location--weather">
        <h4 className="location--add">Feels like</h4>
        <h3 className="location--result">
          {kelvinToCelsius(location.main.feels_like)}°C
        </h3>
        <h4 className="location--add">Humidity</h4>
        <h3 className="location--result">{location.main.humidity}%</h3>
        <h4 className="location--add">Sunrise</h4>
        <h3 className="location--result">
          {timeConvert(location.sys.sunrise)}
        </h3>
        <h4 className="location--add">Sunset</h4>
        <h3 className="location--result">{timeConvert(location.sys.sunset)}</h3>
      </div>
    </main>
  );
}
