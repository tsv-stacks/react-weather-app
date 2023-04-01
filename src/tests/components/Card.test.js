import React from "react";
import { render } from "@testing-library/react";
import Card from "../../components/ForecastSummary";

describe("Card", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

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

  //   it("renders correct values for props", () => {
  //     const { getByText } = render(
  //       <Card
  //         date={validProps.date}
  //         description={validProps.description}
  //         icon={validProps.icon}
  //         temperature={validProps.temperature}
  //       />
  //     );
  //   expect(getByText("Thu")).toHaveAttribute("class", "card--day");
  //   expect(getByText("29 Aug")).toHaveAttribute("class", "card--date");
  //   expect(getByText("Stub description")).toHaveAttribute("class", "card--description");
  //   expect(getByText("22")).toHaveAttribute("class", "card--temp-max");
  //   expect(getByText("14")).toHaveAttribute("class", "card--temp-min");
  //   });
});
