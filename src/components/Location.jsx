import React from "react";

export default function LocationDetails({ location }) {
  function kelvinToCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return Math.round(celsius);
  }

  const tempInC = kelvinToCelsius(location.main.temp);
  const feelsLike = kelvinToCelsius(location.main.feels_like);
  const sunriseTimestamp = location.sys.sunrise;
  const sunsetTimestamp = location.sys.sunset;
  const sunriseTime = new Date(sunriseTimestamp * 1000);
  const sunsetTime = new Date(sunsetTimestamp * 1000);
  const sunriseHours = sunriseTime.getHours();
  const sunriseMinutes = sunriseTime.getMinutes();
  const sunsetHours = sunsetTime.getHours();
  const sunsetMinutes = sunsetTime.getMinutes();
  const formattedSunriseTime = `${String(sunriseHours).padStart(
    2,
    "0"
  )}:${String(sunriseMinutes).padStart(2, "0")}`;
  const formattedSunsetTime = `${String(sunsetHours).padStart(2, "0")}:${String(
    sunsetMinutes
  ).padStart(2, "0")}`;

  return (
    <main className="location">
      <div className="location--details">
        <h1>{location.name}</h1>
        <h3>{location.sys.country}</h3>
        <h3>Date, time</h3>
        <h2>{tempInC}*C</h2>
        <p>icon</p>
        <p>{location.weather[0].main}</p>
      </div>
      <div className="location--weather">
        <h4>feels like</h4>
        <h3>{feelsLike}</h3>
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
