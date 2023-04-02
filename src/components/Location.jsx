import React, { useState, useEffect } from "react";
import { kelvinToCelsius, timeConvert, longDateFromTime } from "./DataFunction";
import WeatherIcon from "./WeatherIcon";
import { ReactComponent as Thermo } from "../assets/thermo.svg";
import { ReactComponent as Humid } from "../assets/humid.svg";
import { ReactComponent as Sunrise } from "../assets/sunrise.svg";
import { ReactComponent as Sunset } from "../assets/sunset.svg";

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
        <h4 className="location--country text">{location.sys.country}</h4>
        <p className="location--longdate text">
          {longDateFromTime(location.dt)}
        </p>
        <p className="location--currentTime num">{time.toLocaleTimeString()}</p>
        <h2 className="location--temp num">
          {kelvinToCelsius(location.main.temp)}°C
        </h2>
        <WeatherIcon icon={location.weather[0].icon} isLocation />
        <h3 className="location--descrip text">{location.weather[0].main}</h3>
      </div>
      <div className="location--weather">
        <div className="location--contain flex">
          <Thermo width="50" height="50" fill="white" />
          <div>
            <h4 className="location--add text">Feels like</h4>
            <h3 className="location--result num">
              {kelvinToCelsius(location.main.feels_like)}°C{" "}
            </h3>
          </div>
        </div>
        <div className="location--contain flex">
          <Humid width="50" height="50" fill="white" />
          <div>
            <h4 className="location--add text">Humidity</h4>
            <h3 className="location--result num">{location.main.humidity}%</h3>
          </div>
        </div>
        <div className="location--contain flex">
          <Sunrise width="50" height="50" fill="white" />
          <div>
            <h4 className="location--add text">Sunrise</h4>
            <h3 className="location--result num">
              {timeConvert(location.sys.sunrise)}
            </h3>
          </div>
        </div>
        <div className="location--contain flex">
          <Sunset width="50" height="50" fill="white" />
          <div>
            <h4 className="location--add text">Sunset</h4>
            <h3 className="location--result num">
              {timeConvert(location.sys.sunset)}
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
