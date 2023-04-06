import React from "react";
import { render } from "@testing-library/react";
import Card from "../../components/ForecastSummary";

describe("Card", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description",
      icon: "stubIcon",
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 2222222,
      description: "Stub description2",
      icon: 602,
      temperature: {
        max: 24,
        min: 13,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(
      <Card
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct number of instances", () => {
    const { getAllByTestId } = render(<Card userInput={validProps} />);

    expect(getAllByTestId("card--forecast")).toHaveLength(1);
  });
});
