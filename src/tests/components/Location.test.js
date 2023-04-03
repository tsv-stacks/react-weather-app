import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/Location";
import {
  kelvinToCelsius,
  timeConvert,
  longDateFromTime,
} from "../../components/DataFunction";

describe("LocationDetails", () => {
  const location = {
    name: "London",
    sys: { country: "GB", sunrise: 1616588223, sunset: 1616634154 },
    main: { temp: 289.76, feels_like: 287.57, humidity: 72 },
    weather: [{ main: "Clouds" }],
    dt: 1616614334,
  };

  it("renders the correct city props", () => {
    const { getByText } = render(<LocationDetails location={location} />);
    expect(getByText(location.name)).toBeTruthy();
    expect(getByText("London")).toBeTruthy();
  });

  it("renders the correct country props", () => {
    const { getByText } = render(<LocationDetails location={location} />);

    expect(getByText(location.sys.country)).toBeTruthy();
    expect(getByText("GB")).toBeTruthy();
  });

  it("renders the long date from the time of the location", () => {
    const { getByText } = render(<LocationDetails location={location} />);
    const date = longDateFromTime(location.dt);
    expect(getByText(date)).toBeInTheDocument();
  });

  it("renders the temperature in celsius", () => {
    const { getByText } = render(<LocationDetails location={location} />);
    const temp = kelvinToCelsius(location.main.temp);
    expect(getByText(`${temp}°C`)).toBeInTheDocument();
  });

  it("renders the feels like temperature in celsius", () => {
    const { getByText } = render(<LocationDetails location={location} />);
    const feelsLike = kelvinToCelsius(location.main.feels_like);
    expect(getByText(`${feelsLike}°C`)).toBeInTheDocument();
  });

  it("renders the humidity of the location", () => {
    const { getByText } = render(<LocationDetails location={location} />);
    expect(getByText(`${location.main.humidity}%`)).toBeInTheDocument();
  });

  it("renders the sunrise time of the location", () => {
    const { getByText } = render(<LocationDetails location={location} />);
    const sunrise = timeConvert(location.sys.sunrise);
    expect(getByText(sunrise)).toBeInTheDocument();
  });

  it("renders the sunset time of the location", () => {
    const { getByText } = render(<LocationDetails location={location} />);
    const sunset = timeConvert(location.sys.sunset);
    expect(getByText(sunset)).toBeInTheDocument();
  });
});
