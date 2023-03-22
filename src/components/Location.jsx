import React from "react";

export default function LocationDetails() {
  function kelvinToCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return Math.round(celsius);
  }

  return (
    <main className="location">
      <div className="location--details">
        <h1>city name</h1>
        <h3>country</h3>
        <h3>Date, time</h3>
        <h2>Temp</h2>
        <p>icon</p>
        <p>description</p>
      </div>
      <div className="location--weather">
        <h4>feels like</h4>
        <h3>temp</h3>
        <h4>humididty</h4>
        <h3>%</h3>
        <h4>sunrise</h4>
        <h3>time</h3>
        <h4>sunset</h4>
        <h3>time</h3>
      </div>
    </main>
  );
}
