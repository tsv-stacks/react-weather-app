import React from "react";
import { getDay, dateFromTime } from "./DataFunction";

export default function Forecast(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className="card--forecast">
      <div className="card--daydate">
        <p>{getDay(data.date)}</p>
        <p>{dateFromTime(data.date)}</p>
      </div>
      <p>{data.description}</p>
      <div className="card--temp">
        <h4>{data.temperature.max}</h4>
        <h5>{data.temperature.min}</h5>
      </div>
      <p>icon</p>
    </div>
  );
}
