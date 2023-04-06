import React from "react";
import { render } from "@testing-library/react";
import Forecast from "../../components/Forecast";

describe("Forecast", () => {
  const data = {
    date: 1619427883,
    temperature: {
      max: 10,
      min: 5,
    },
    description: "sunny",
  };

  it("renders correctly", () => {
    const { asFragment } = render(<Forecast data={data} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct data", () => {
    const { getByText } = render(<Forecast data={data} />);
    expect(getByText("Monday")).toBeInTheDocument();
    expect(getByText("19/01")).toBeInTheDocument();
    expect(getByText("10°C")).toBeInTheDocument();
    expect(getByText("5°C")).toBeInTheDocument();
    expect(getByText("sunny")).toBeInTheDocument();
  });
});
