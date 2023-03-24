import React from "react";

export default function Forecast(props) {
  console.log(props);
  return (
    <div className="forecast">
      <p>day</p>
      <h4>temp</h4>
      <h5>temp low</h5>
      <p>icon</p>
    </div>
  );
}
