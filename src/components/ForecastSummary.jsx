import React from "react";
import Forecast from "./Forecast";
import data from "../data/forecast.json";
import { getDay } from "./DataFunction";

export default function Card() {
  const cards = data.forecasts.map((card, i) => {
    return (
      <Forecast key={getDay(data.forecasts[i].date)} data={data.forecasts[i]} />
    );
  });

  return <section className="cards">{cards}</section>;
}
