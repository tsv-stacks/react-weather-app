import React from "react";
import { getDay, dateFromTime } from "./DataFunction";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  const { data } = props;
  return (
    <div className="card--forecast">
      <div className="card--daydate">
        <p className="card--date">{getDay(data.date)}</p>
        <p className="card--time">{dateFromTime(data.date)}</p>
      </div>
      <div className="card--temp">
        <h2 className="card--temp-max">{data.temperature.max}°C</h2>
        <h4 className="card--temp-min">{data.temperature.min}°C</h4>
      </div>
      <WeatherIcon icon={data.icon} isLocation={false} />
      <p className="card--description">{data.description}</p>
    </div>
  );
}
